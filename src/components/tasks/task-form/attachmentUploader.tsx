import { CirclePlus } from "lucide-react";
import React from "react";

interface AttachmentUploaderProps {
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AttachmentUploader: React.FC<AttachmentUploaderProps> = ({
  handleFileChange,
}) => {
  return (
    <div className="w-full">
      <label className="text-sm font-medium text-[#182B49]">المرفقات</label>

      <div
        className="
          mt-3 border-2 border-dashed border-[#D3DAE6]
          rounded-lg p-8 flex flex-col items-center justify-center
          text-center cursor-pointer bg-gray-100 transition
        "
        onClick={() => document.getElementById("uploadInput")?.click()}
      >
        <div className="text-gray-400 text-4xl mb-3">
          <CirclePlus />
        </div>

        <p className="text-gray-500 text-sm">
          انقر لتحميل الملفات أو اسحبها وأفلتها هنا
        </p>

        <p className="text-gray-500 text-xs mt-1">
          (PDF, Word, Excel, JPG, PNG أو GIF) الحد الأقصى: 10 ميجابايت
        </p>

        <input
          id="uploadInput"
          type="file"
          multiple
          onChange={handleFileChange}
          className="hidden"
        />
      </div>
    </div>
  );
};

export default AttachmentUploader;
