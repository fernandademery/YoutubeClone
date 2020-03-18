import React, { useState, useEffect } from "react";
import { Typography, Button, Form, message, Input, Icon } from "antd";
import Dropzone from "react-dropzone";
import axios from "axios";

const { Title } = Typography;
const { TextArea } = Input;

function UploadVideoPage() {
  const [title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  // To toggle privacy of the videos, use 0 for private and 1 for public.
  const [Privacy, setPrivacy] = useState(0);
  const [Category, setCategory] = useState("Film & Animation");
  const [FilePath, setFilePath] = useState("");

  const handleChangeTitle = event => {
    setTitle(event.currentTarget.value);
  };

  const handleChangeDescription = event => {
    console.log(event.currentTarget.value);
    setDescription(event.currentTarget.value);
  };

  const handleChangePrivacy = event => {
    setPrivacy(event.currentTarget.value);
  };

  const handleChangeCategory = event => {
    setCategory(event.currentTarget.value);
  };

  const onSubmit = () => {};

  const onDrop = files => {
    let formData = new FormData();
    const config = {
      header: { "content-type": "multipart/form-data" }
    };

    console.log(files);
    formData.append("file", files[0]);

    axios.post("/api/video/uploadfiles", formData, config).then(response => {
      if (response.data.success) {
        let variable = {
          filePath: response.data.filePath,
          fileName: response.data.fileName
        };
        setFilePath(response.data.filePath);
      } else {
        alert("Failed to save the video in server!");
      }
    });
  };

  const videoPrivacy = [
    { value: 0, label: "Private" },
    { value: 1, label: "Public" }
  ];

  const categories = [
    { value: 0, label: "Film & Animation" },
    { value: 1, label: "Autos & Vehicles" },
    { value: 2, label: "Music" },
    { value: 3, label: "Pets & Animals" },
    { value: 4, label: "Sports" },
    { value: 5, label: "Beauty & MakeUp" },
    { value: 6, label: "Do it Yourself" },
    { value: 7, label: "Pop Culture" }
  ];

  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <Title level={2}>Upload Video</Title>
      </div>

      <Form onSubmit={onSubmit}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Dropzone onDrop={onDrop} multiple={false} maxSize={800000000}>
            {({ getRootProps, getInputProps }) => (
              <div
                style={{
                  width: "300px",
                  height: "240px",
                  border: "1px solid lightgray",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
                {...getRootProps()}
              >
                <input {...getInputProps()} />
                <Icon type="plus" style={{ fontSize: "3rem" }} />
              </div>
            )}
          </Dropzone>

          {/* {thumbnail !== "" &&
        <div>
            <img src={`http://localhost:5000/${thumbnail}`} alt="haha" />
             </div> 
            } */}
        </div>
        <br /> <br />
        <label>Title</label>
        <Input onChange={handleChangeTitle} value={title} />
        <br /> <br />
        <label>Description</label>
        <TextArea onChange={handleChangeDescription} value={Description} />
        <br /> <br />
        <select onChange={handleChangePrivacy}>
          {videoPrivacy.map((item, index) => (
            <option key={index} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        <br /> <br />
        <select onChange={handleChangeCategory}>
          {categories.map((item, index) => (
            <option key={index} value={item.label}>
              {item.label}
            </option>
          ))}
        </select>
        <br /> <br />
        <Button type="primary" size="large" onClick={onSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default UploadVideoPage;
