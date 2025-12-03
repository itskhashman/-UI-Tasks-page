import { CustomDatePicker } from "./datePicker";
import AttachmentUploader from "./attachmentUploader";
import { Task } from "../../../domain/tasks";
import { FormikErrors, FormikTouched } from "formik";
import { Select } from "../../ui/select";

interface Props {
  formData: Task;
  errors: FormikErrors<Task>;
  touched: FormikTouched<Task>;
  setFieldValue: (field: string, value: any) => void;
  handleFileChange: (e: any) => void;
}

export const TaskMetaForm = ({
  formData,
  errors,
  touched,
  setFieldValue,
  handleFileChange,
}: Props) => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <Select
          label="المسؤول"
          name="assignee"
          value={formData.assignee}
          options={["أحمد سامر", "محمد أحمد", "نور محمد"]}
          onChange={(e) => setFieldValue("assignee", e.target.value)}
          error={
            errors.assignee && touched.assignee ? errors.assignee : undefined
          }
        />

        <Select
          label="الأولوية"
          name="priority"
          value={formData.priority}
          options={["عالي", "متوسط", "منخفض"]}
          onChange={(e) => setFieldValue("priority", e.target.value)}
          error={
            errors.priority && touched.priority ? errors.priority : undefined
          }
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <CustomDatePicker
          label="تاريخ البدء"
          name="startDate"
          value={formData.startDate}
          onChange={(e) => setFieldValue("startDate", e.target.value)}
          error={
            errors.startDate && touched.startDate ? errors.startDate : undefined
          }
        />

        <CustomDatePicker
          label="تاريخ الانتهاء"
          name="dueDate"
          value={formData.dueDate}
          onChange={(e) => setFieldValue("dueDate", e.target.value)}
          minDate={
            formData.startDate ? new Date(formData.startDate) : undefined
          }
          error={errors.dueDate && touched.dueDate ? errors.dueDate : undefined}
        />
      </div>

      <Select
        label="الحالة"
        name="status"
        value={formData.status}
        options={["للتنفيذ", "قيد التنفيذ", "مكتملة", "متوقفة"]}
        onChange={(e) => setFieldValue("status", e.target.value)}
        error={errors.status && touched.status ? errors.status : undefined}
      />

      <AttachmentUploader handleFileChange={handleFileChange} />
    </div>
  );
};
