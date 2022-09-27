import React from "react";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(import("react-quill"), { ssr: false });
import "../../node_modules/react-quill/dist/quill.snow.css";
import styles from "../../styles/DescriptionForm.module.css";

const modules = {
  toolbar: [
    [
      { header: [1, 2, 3, 4, false] },

      { size: ["small", false, "large", "huge"] },
    ],
    [{ font: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
      { align: [] },
    ],
    [{ color: [] }, { background: [] }],
    ["link"],
    ["clean"],
  ],
};

export default function DescriptionForm({ formData, setFormData }) {
  return (
    <div className={styles.container}>
      <ReactQuill
        theme="snow"
        value={formData.quillValue}
        onChange={(e) => {
          setFormData((prevData) => ({ ...prevData, quillValue: e }));
        }}
        modules={modules}
      />
    </div>
  );
}
