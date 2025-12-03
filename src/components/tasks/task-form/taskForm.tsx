import { Formik, Form } from "formik";
import { TaskDetailsForm } from "./taskDetailsForm";
import { TaskMetaForm } from "./taskMetaForm";
import { Task } from "../../../domain/tasks";
import { Button } from "../../ui/button";
import { X } from "lucide-react";
import { taskValidationSchema } from "../../../lib/validation/task";
import { useTasks } from "../../../hooks/useTask";

interface TaskFormProps {
  isOpen: boolean;
  closeModal: () => void;
}

export const TaskForm = ({ isOpen, closeModal }: TaskFormProps) => {
  const { addTask } = useTasks();

  if (!isOpen) return null;

  const handleSubmit = (values: Task) => {
    const newTask: Task = {
      ...values,
      id: Date.now(),
    };

    addTask(newTask);
    alert("تم حفظ المهمة بنجاح!");

    closeModal();
  };

  const initialValues: Task = {
    id: 0,
    taskTitle: "",
    taskDescription: "",
    department: "",
    project: "",
    priority: "",
    assignee: "",
    startDate: "",
    dueDate: "",
    status: "",
    attachments: null,
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-md p-6 lg:w-2/6 md:w-4/6 w-5/6 max-h-[98vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-[#182B49]">إضافة مهمة جديدة</h2>
          <X className="cursor-pointer" onClick={closeModal} />
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={taskValidationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched, setFieldValue }) => {
            const handleFileChange = (e: any) => {
              const file = e.target.files?.[0] ?? null;
              setFieldValue("attachments", file);
            };

            return (
              <Form className="space-y-6">
                <TaskDetailsForm
                  formData={values}
                  errors={errors}
                  touched={touched}
                  setFieldValue={setFieldValue}
                />

                <TaskMetaForm
                  formData={values}
                  errors={errors}
                  touched={touched}
                  setFieldValue={setFieldValue}
                  handleFileChange={handleFileChange}
                />

                <div className="flex justify-end mt-6 gap-2">
                  <Button
                    className="flex justify-center item-center bg-white text-black border border-[#e7ebf2] w-16 h-10"
                    onClick={closeModal}
                    type="button"
                  >
                    إلغاء
                  </Button>

                  <Button
                    className="flex justify-center item-center bg-[#0F1B31] text-[#C9B57A] w-32 h-10"
                    type="submit"
                  >
                    حفظ المهمة
                  </Button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};
