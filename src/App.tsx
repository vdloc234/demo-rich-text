/* eslint-disable @typescript-eslint/no-explicit-any */
import { Editor } from "@tinymce/tinymce-react";
import { SetStateAction, useRef, useState } from "react";
import "./App.css";

function App() {
	const editorRef = useRef(null);

	const [content, setContent] = useState(""); // Lưu nội dung nhập vào
	// const [savedContent, setSavedContent] = useState(""); // Lưu nội dung sau khi nhấn Save

	const handleSave = () => {
		// setSavedContent(content); // Cập nhật nội dung hiển thị
		console.log("content", content);
	};

	return (
		<div className="tinymce-container" style={{ backgroundColor: "#ccc" }}>
			<Editor
				apiKey="7dnj4lajdpyrl8z7m0wsm4tqy7ud7aisp60pxyw9fot8h2a7"
				onInit={(evt: any, editor: any) => (editorRef.current = editor)}
				initialValue="<p>Nhập nội dung tại đây...</p>"
				onEditorChange={(newContent: SetStateAction<string>) => setContent(newContent)}
				init={{
					height: 500,
					menubar: true,
					plugins: "advlist autolink lists link image charmap preview anchor table Upload Image",
					toolbar:
						"undo redo | formatselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | image | table tabledelete ",
					table_advtab: true,
					image_advtab: true,
					table_class_list: [
						{ title: "None", value: "" },
						{ title: "Table Bordered", value: "table-bordered" },
						{ title: "Table Striped", value: "table-striped" },
					],
					content_style: "body { font-family: Arial, sans-serif; font-size: 14px; }",
					// style_formats: [
					// 	{ title: "Highlight", inline: "span", classes: "highlight-text" },
					// 	{ title: "Custom Block", block: "div", classes: "custom-block" },
					// ],
					file_picker_types: "image",

					// Xử lý upload ảnh từ máy tính
					file_picker_callback: (
						callback: (arg0: string, arg1: { alt: string }) => void,
						meta: { filetype: string }
					) => {
						if (meta.filetype === "image") {
							const input = document.createElement("input");
							input.setAttribute("type", "file");
							input.setAttribute("accept", "image/*");

							input.onchange = function () {
								const file = (this as HTMLInputElement)?.files?.[0];
								if (file) {
									const reader = new FileReader();
									reader.onload = function (event) {
										callback(event.target?.result as string, {
											alt: file.name,
										});
									};
									reader.readAsDataURL(file);
								}
							};

							input.click();
						}
					},
				}}
			/>
			<button onClick={handleSave} className="save-button">
				Lưu nội dung
			</button>

			{/* <div style={{ border: "1px #000 solid", padding: "10px", marginTop: "10px" }}>
				<div>Preview</div>
				<div className="output-content" dangerouslySetInnerHTML={{ __html: savedContent }} />
			</div> */}
		</div>
	);
}

export default App;
