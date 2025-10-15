'use client';

import { useState, useRef } from 'react';
import { X } from 'lucide-react';

interface JobApplicationPopupProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle?: string;
  isClosing?: boolean;
}

export default function JobApplicationPopup({
  isOpen,
  onClose,
  jobTitle = 'Vị trí ứng tuyển',
  isClosing = false,
}: JobApplicationPopupProps) {
  const [message, setMessage] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    if (value.length <= 500) {
      setMessage(value);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length > 0) {
      setSelectedFile(files[0]); // Chỉ lấy file đầu tiên
    }
  };

  const handleFileDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      setSelectedFile(files[0]); // Chỉ lấy file đầu tiên
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const removeFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Tạo form HTML thông thường với enctype="multipart/form-data"
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = 'https://formspree.io/f/mrbkdvvy';
      form.enctype = 'multipart/form-data';
      form.style.display = 'none';

      // Thêm các field cơ bản
      const currentForm = e.target as HTMLFormElement;
      const formElements = currentForm.elements;

      for (let i = 0; i < formElements.length; i++) {
        const element = formElements[i] as
          | HTMLInputElement
          | HTMLTextAreaElement;
        if (element.name && element.value && element.type !== 'file') {
          const input = document.createElement('input');
          input.type = 'hidden';
          input.name = element.name;
          input.value = element.value;
          form.appendChild(input);
        }
      }

      // Thêm message và jobTitle
      const messageInput = document.createElement('input');
      messageInput.type = 'hidden';
      messageInput.name = 'message';
      messageInput.value = message;
      form.appendChild(messageInput);

      const jobTitleInput = document.createElement('input');
      jobTitleInput.type = 'hidden';
      jobTitleInput.name = 'jobTitle';
      jobTitleInput.value = jobTitle;
      form.appendChild(jobTitleInput);

      // Thêm file input nếu có file
      if (selectedFile) {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.name = 'cv';
        fileInput.style.display = 'none';

        // Tạo FileList từ File object
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(selectedFile);
        fileInput.files = dataTransfer.files;

        form.appendChild(fileInput);
      }

      // Submit form
      document.body.appendChild(form);
      form.submit();
      document.body.removeChild(form);

      // Reset form
      setMessage('');
      setSelectedFile(null);
      onClose();
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    // Chỉ đóng popup khi click vào overlay, không phải vào popup content
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Không return null ngay lập tức, để animation có thể chạy
  if (!isOpen && !isClosing) return null;

  return (
    <div
      className='fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4'
      onClick={handleOverlayClick}
    >
      <div
        className={`bg-white shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transition-all duration-500 ease-out transform ${
          isClosing ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'
        }`}
        style={{
          animation:
            isOpen && !isClosing
              ? 'slideIn 0.5s ease-out forwards'
              : isClosing
              ? 'slideOut 0.5s ease-out forwards'
              : 'none',
        }}
      >
        {/* Header */}
        <div className='bg-primary-blue-1 text-white p-6 relative'>
          <h2 className='text-2xl font-bold text-center'>ĐĂNG KÝ ỨNG TUYỂN</h2>
          <p className='text-center text-sm mt-2 opacity-90'>{jobTitle}</p>
          <button
            onClick={onClose}
            className='absolute top-4 right-4 text-white hover:text-gray-200 transition-colors duration-200 cursor-pointer'
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className='p-6'>
          <form onSubmit={handleSubmit} className='space-y-6'>
            {/* Honeypot chống spam */}
            <input type='text' name='_honey' style={{ display: 'none' }} />

            {/* Redirect về trang liên hệ sau khi gửi */}
            <input
              type='hidden'
              name='_next'
              value='https://philongcorp.vn/lien-he?success=1'
            />

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
              {/* Left Section - Form Fields */}
              <div className='space-y-6'>
                <div>
                  <label
                    htmlFor='fullName'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Họ và tên <span className='text-red-500'>*</span>
                  </label>
                  <input
                    type='text'
                    id='fullName'
                    name='fullName'
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary-blue-1 outline-none transition-colors duration-300'
                    placeholder='Nhập họ và tên của bạn'
                  />
                </div>

                <div>
                  <label
                    htmlFor='phone'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Số điện thoại <span className='text-red-500'>*</span>
                  </label>
                  <input
                    type='tel'
                    id='phone'
                    name='phone'
                    required
                    pattern='[0-9]{10,11}'
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary-blue-1 outline-none transition-colors duration-300'
                    placeholder='Nhập số điện thoại'
                  />
                </div>

                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Email <span className='text-red-500'>*</span>
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary-blue-1 outline-none transition-colors duration-300'
                    placeholder='Nhập địa chỉ email'
                  />
                </div>

                <div>
                  <label
                    htmlFor='message'
                    className='block text-sm font-medium text-gray-700 mb-2'
                  >
                    Lời nhắn cho nhà tuyển dụng
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    value={message}
                    onChange={handleMessageChange}
                    rows={4}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-primary-blue-1 outline-none transition-colors duration-300 resize-vertical'
                    placeholder='Nhập lời nhắn cho nhà tuyển dụng...'
                  ></textarea>
                  <div className='text-xs text-gray-500 mt-1'>
                    {message.length} of 500 max characters
                  </div>
                </div>
              </div>

              {/* Right Section - File Upload */}
              <div className='border-2 border-dashed border-primary-blue-1 p-6'>
                <div className='space-y-4'>
                  <div>
                    <input
                      ref={fileInputRef}
                      type='file'
                      onChange={handleFileSelect}
                      className='hidden'
                      accept='.pdf,.doc,.docx,.pngx,.jpeg,.pngx'
                    />
                    <button
                      type='button'
                      onClick={() => fileInputRef.current?.click()}
                      className='bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition-colors duration-200'
                    >
                      Choose File
                    </button>
                    <span className='ml-2 text-sm text-gray-500'>
                      {selectedFile ? 'File selected' : 'No file chosen'}
                    </span>
                  </div>

                  <div className='flex items-center text-primary-blue-1'>
                    <span className='text-2xl mr-2'>+</span>
                    <span className='text-sm font-medium'>Thêm CV</span>
                  </div>

                  <div
                    className='border-2 border-dashed border-gray-300 p-6 text-center hover:border-primary-blue-1 transition-colors duration-200 cursor-pointer'
                    onDrop={handleFileDrop}
                    onDragOver={handleDragOver}
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <div className='text-gray-600 mb-2'>
                      Chọn hoặc kéo thả CV của bạn vào đây
                    </div>
                    <div className='text-xs text-gray-500'>
                      Đặt tên theo đúng cú pháp:
                    </div>
                    <div className='text-xs text-gray-700 font-mono bg-gray-100 px-2 py-1 mt-1'>
                      CV_nganhngheungtuyen_hovaten
                    </div>
                    <div className='text-xs text-blue-600 mt-2'>
                      ⓘ Chỉ hỗ trợ 1 file CV (PDF, DOC, DOCX, JPG, PNG)
                    </div>
                  </div>

                  {/* Selected File */}
                  {selectedFile && (
                    <div className='space-y-2'>
                      <div className='text-sm font-medium text-gray-700'>
                        File đã chọn:
                      </div>
                      <div className='flex items-center justify-between bg-gray-50 p-2'>
                        <span className='text-sm text-gray-600 truncate'>
                          {selectedFile.name}
                        </span>
                        <button
                          type='button'
                          onClick={removeFile}
                          className='text-red-500 hover:text-red-700 text-sm transition-colors duration-200'
                        >
                          ×
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className='text-center pt-6'>
              <button
                type='submit'
                disabled={isSubmitting}
                className={`bg-primary-blue-1 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                  isSubmitting
                    ? 'opacity-50 cursor-not-allowed'
                    : 'hover:bg-primary-blue-1/80'
                }`}
              >
                {isSubmitting ? 'Đang gửi...' : 'Gửi thông tin'}
              </button>
            </div>
          </form>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slideOut {
          from {
            transform: translateY(0);
            opacity: 1;
          }
          to {
            transform: translateY(100%);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
