"use client";
import Button from "@/sharedComponets/ui/buttons/Button";
import React, { useState } from "react";

export default function UploadFile() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadStatus, setUploadStatus] = useState("");
  const [uploadedUrls, setUploadedUrls] = useState([]);
  const [loading, setLoading] = useState(false); // ⬅️ NEW STATE

  const handleFileChange = (event) => {
    setSelectedFiles(event.target.files);
    setUploadedUrls([]);
    setUploadStatus("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (selectedFiles.length === 0) {
      setUploadStatus("Please select a file to upload.");
      return;
    }

    const formData = new FormData();

    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append("files", selectedFiles[i]);
    }

    setLoading(true); // ⬅️ Start loading

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Upload failed with status ${response.status}`);
      }

      const data = await response.json();
      console.log(data, ' uploaded data from the file upload')
      if (data?.uploadedFiles?.length > 0) {
        setUploadedUrls(data.uploadedFiles);
        setUploadStatus("Upload successful!");
      } else {
        setUploadStatus("Upload succeeded but no URLs returned.");
      }
    } catch (error) {
      console.error(error);
      setUploadStatus("Error uploading files.");
    } finally {
      setLoading(false); // ⬅️ Stop loading
    }
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <div className="mb-10">
        <label htmlFor="fileUpload">Choose file(s):</label>
        <input
          type="file"
          id="fileUpload"
          name="files"
          multiple
          onChange={handleFileChange}
        />
      </div>

      <Button className="!py-2.5" label={loading ? "Uploading..." : "Upload"} disabled={loading} />

      {uploadStatus && <p>{uploadStatus}</p>}

      {uploadedUrls.length > 0 && (
        <div className="mt-4">
          <h4>Uploaded File URLs:</h4>
          <ul>
            {uploadedUrls.map((url, index) => (
              <li key={index}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {url}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </form>
  );
}
