import * as Yup from "yup";

export const taskValidationSchema = Yup.object().shape({
  taskTitle: Yup.string().required("عنوان المهمة مطلوب"),
  taskDescription: Yup.string().required("وصف المهمة مطلوب"),
  department: Yup.string().required("القسم مطلوب"),
  project: Yup.string().required("المشروع مطلوب"),
  priority: Yup.string().required("الأولوية مطلوبة"),
  assignee: Yup.string().required("المسؤول مطلوب"),
  startDate: Yup.date()
    .required("تاريخ البدء مطلوب")
    .typeError("تاريخ البدء غير صالح"),
  dueDate: Yup.date()
    .required("تاريخ الانتهاء مطلوب")
    .typeError("تاريخ الانتهاء غير صالح")
    .min(Yup.ref("startDate"), "تاريخ الانتهاء يجب أن يكون بعد تاريخ البدء"),
  status: Yup.string().required("حالة المهمة مطلوبة"),
});
