/* eslint-disable @typescript-eslint/no-explicit-any */
import { CKEditor } from "ckeditor4-react";
import "./App.css";
import { useState } from "react";

const Editor: React.FC = () => {
  const [content, setContent] = useState<string>("<p>Hello World</p>");
  return (
    <CKEditor
      data={content}
      onChange={(e: any) => setContent(e.editor.getData())}
      editorUrl="https://cdn.ckeditor.com/4.22.1/full/ckeditor.js"
    />
  );
};

function App() {
  // const editorRef = useRef(null);

  // const [content, setContent] = useState(""); // Lưu nội dung nhập vào
  // // const [savedContent, setSavedContent] = useState(""); // Lưu nội dung sau khi nhấn Save

  // const handleSave = () => {
  //   // setSavedContent(content); // Cập nhật nội dung hiển thị
  //   console.log("content", content);
  // };

  // const handleFileUpload = async (file: File): Promise<string> => {
  //   return new Promise((resolve) => {
  //     const reader = new FileReader();
  //     reader.onload = (e) => {
  //       if (e.target?.result) {
  //         resolve(e.target.result as string); // Trả về URL Base64
  //       }
  //     };
  //     reader.readAsDataURL(file);
  //   });
  // };

  return (
    <>
      {/* <div className="tinymce-container" style={{ backgroundColor: "#ccc" }}>
        <Editor
          apiKey={import.meta.env.VITE_TINYMCE_API_KEY}
          onInit={(editor: any) => (editorRef.current = editor)}
          initialValue="<p>Nhập nội dung tại đây...</p>"
          onEditorChange={(newContent: SetStateAction<string>) =>
            setContent(newContent)
          }
          init={{
            height: 500,
            menubar: true,
            plugins:
              "advlist autolink lists link media image charmap preview anchor table Upload Image",
            toolbar:
              "undo redo | formatselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | image | table tabledelete | media ",
            table_advtab: true,
            image_advtab: true,
            contextmenu: "media",
            media_live_embeds: true, // Cho phép nhúng video trực tiếp
            media_alt_source: false, // Ẩn tùy chọn nguồn thay thế
            media_poster: true, // Hỗ trợ ảnh poster cho video
            table_class_list: [
              { title: "None", value: "" },
              { title: "Table Bordered", value: "table-bordered" },
              { title: "Table Striped", value: "table-striped" },
            ],
            content_style:
              "body { font-family: Arial, sans-serif; font-size: 14px; }",
            // style_formats: [
            // 	{ title: "Highlight", inline: "span", classes: "highlight-text" },
            // 	{ title: "Custom Block", block: "div", classes: "custom-block" },
            // ],
            file_picker_types: "image media",

            // Xử lý upload ảnh từ máy tính
            file_picker_callback: (callback: any, _value: any, meta: any) => {
              const input = document.createElement("input");
              input.setAttribute("type", "file");

              if (meta.filetype === "image") {
                input.setAttribute("accept", "image/*");
              } else if (meta.filetype === "media") {
                input.setAttribute("accept", "video/*");
              }

              input.onchange = async (event: Event) => {
                const target = event.target as HTMLInputElement;
                const file = target.files?.[0];

                if (file) {
                  const fileUrl = await handleFileUpload(file);

                  if (fileUrl) {
                    if (meta.filetype === "image") {
                      callback(fileUrl, { alt: "Uploaded image" });
                    } else if (meta.filetype === "media") {
                      callback(fileUrl, { source2: fileUrl, poster: "" });
                    }
                  }
                }
              };

              input.click();
            },
          }}
        />
        <button onClick={handleSave} className="save-button">
          Lưu nội dung
        </button>
      </div> */}
      <div>hahahha</div>
      <CKEditor
        type="classic"
        initData="<p>Hello from CKEditor 4!</p>"
        onInstanceReady={() => {
          alert("Editor is ready!");
        }}
        editorUrl="https://cdn.ckeditor.com/4.22.1/full/ckeditor.js"
        config={{
          extraPlugins: "image", // Kích hoạt plugin Image
          filebrowserImageUploadUrl: "/upload-image", // Đường dẫn backend xử lý upload
        }}
      />
    </>
  );
}

export default App;
