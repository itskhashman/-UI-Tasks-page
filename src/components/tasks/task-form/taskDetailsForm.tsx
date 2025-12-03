import { Task } from "../../../domain/tasks";
import { FormikErrors, FormikTouched } from "formik";
import { Select } from "../../ui/select";

interface Props {
  formData: Task;
  errors: FormikErrors<Task>;
  touched: FormikTouched<Task>;
  setFieldValue: (field: string, value: any) => void;
}

export const TaskDetailsForm = ({
  formData,
  errors,
  touched,
  setFieldValue,
}: Props) => {
  return (
    <div className="space-y-4">
      <div>
        <label className="text-sm font-medium text-[#182B49]">
          عنوان المهمة
          <input
            type="text"
            name="taskTitle"
            placeholder="أدخل عنوان المهمة"
            value={formData.taskTitle}
            onChange={(e) => setFieldValue("taskTitle", e.target.value)}
            className={`mt-2 border p-2 rounded-md w-full ${
              errors.taskTitle && touched.taskTitle
                ? "border-red-500"
                : "border-[#E2E8F0]"
            }`}
          />
        </label>
        {errors.taskTitle && touched.taskTitle && (
          <p className="text-red-500 text-xs mt-1">{errors.taskTitle}</p>
        )}
      </div>

      <div>
        <label className="text-sm font-medium text-[#182B49]">
          وصف المهمة
          <input
            name="taskDescription"
            placeholder="أدخل وصف تفصيلي للمهمة"
            value={formData.taskDescription}
            onChange={(e) => setFieldValue("taskDescription", e.target.value)}
            className={`mt-2 border p-2 rounded-md w-full ${
              errors.taskDescription && touched.taskDescription
                ? "border-red-500"
                : "border-[#E2E8F0]"
            }`}
          />
        </label>
        {errors.taskDescription && touched.taskDescription && (
          <p className="text-red-500 text-xs mt-1">{errors.taskDescription}</p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Select
          label="المشروع"
          name="project"
          value={formData.project}
          options={[
            "تطوير الموقع الإلكتروني",
            "تصميم وتنفيذ قاعدة بيانات للمشروع",
            "تدريب الموظفين الجدد",
          ]}
          onChange={(e) => setFieldValue("project", e.target.value)}
          error={errors.project && touched.project ? errors.project : undefined}
        />

        <Select
          label="القسم"
          name="department"
          value={formData.department}
          options={["قسم 1", "قسم 2"]}
          onChange={(e) => setFieldValue("department", e.target.value)}
          error={
            errors.department && touched.department
              ? errors.department
              : undefined
          }
        />
      </div>
    </div>
  );
};
