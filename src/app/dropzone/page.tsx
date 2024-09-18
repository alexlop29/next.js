"use client";
import { useCallback, useState, Fragment } from "react";
import Dropzone, { FileRejection } from "react-dropzone";
import toast, { Toaster } from "react-hot-toast";

// icons
import File from "@/assets/icons/File";

type ValueProps = {
  name: string;
  size: number | string;
  content: Blob;
};

const Page = () => {
  const [files, setFiles] = useState<ValueProps[]>([]);

  const handleDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const newFiles: ValueProps[] = [];

      for (const file of acceptedFiles) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const content = new Blob([e.target?.result as ArrayBuffer], { type: file.type });
          newFiles.push({
            name: file.name,
            size: file.size,
            content,
          });
          setFiles((prevFiles) => [...prevFiles, ...newFiles]);
        };
        reader.readAsArrayBuffer(file);
      }
    },
    [],
  );

  const handleDelete = useCallback(
    (file: ValueProps) => {
      setFiles((prevFiles) => prevFiles.filter((f) => f.name !== file.name));
    },
    [],
  );

  const handleDownload = useCallback(
    (file: ValueProps) => {
      const link = document.createElement("a");

      // Use the file content for download
      const blob = new Blob([file.content], { type: "application/octet-stream" });
      link.href = URL.createObjectURL(blob);
      link.download = file.name || "download";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
    [],
  );

  const handleRejection = useCallback(
    (rejected: FileRejection[]) => {
      rejected.forEach(() => {
        toast.error("Upload failed", { position: "bottom-right" });
      });
    },
    [],
  );

  const focusedStyle = {
    borderColor: "transparent",
    outline: "none",
  };

  const style = (isFocused: boolean) => ({
    ...(isFocused ? focusedStyle : {}),
  });

  return (
    <>
      <Toaster />
      <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4 p-4">
        <div className="sm:col-span-1 bg-white p-4 rounded-lg">
          <div className="flex flex-row text-black">
            <div>Add new files</div>
          </div>

          <div className="flex justify-center text-black p-4">
            <Dropzone
              accept={{
                "image/jpeg": [],
                "image/png": [],
                "application/pdf": [],
              }}
              maxSize={10000000}
              onDropAccepted={handleDrop}
              onDropRejected={handleRejection}
              autoFocus={false}
              noClick={true}
            >
              {({ getRootProps, getInputProps, isFocused }) => (
                <section className="h-32 justify-center content-center flex items-center">
                  <div {...getRootProps({ style: style(isFocused) })}>
                    <input {...getInputProps()} />
                    Drag & Drop
                    <div className="text-xs">
                      JPG, PNG, or PDF file size no more than 10MB
                    </div>
                  </div>
                </section>
              )}
            </Dropzone>
          </div>

          {files.length === 0 && (
            <div className="flex items-center justify-center space-x-2">
              <div className="h-px flex-grow bg-[#D0D7DE]"></div>
              <div className="text-black">or</div>
              <div className="h-px flex-grow bg-[#D0D7DE]"></div>
            </div>
          )}

          {files.length > 0 && (
            <div>
              {files.map((file: ValueProps, index: number) => (
                <Fragment key={index}>
                  <div className="flex flex-row pl-2 pr-2 pb-2 pt-4">
                    <div className="pr-2 pt-0.5">
                      <File size={30} />
                    </div>

                    <div className="flex-grow flex flex-col items-start">
                      <div className="text-sm text-black text-left truncate max-w-[300px]">
                        {file.name}
                      </div>
                      <div className="text-black text-xs text-left">
                        {typeof file.size === "string"
                          ? file.size
                          : `${(Number(file.size) / (1024 * 1024)).toFixed(2)} MB`}
                      </div>
                    </div>

                    <button
                      type="button"
                      className="focus:outline-none text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                      onClick={() => handleDownload(file)}
                    >
                      Download
                    </button>
                    <button
                      type="button"
                      className="focus:outline-none text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                      onClick={() => handleDelete(file)}
                    >
                      Delete
                    </button>
                  </div>

                  {index !== files.length - 1 && (
                    <div className="pl-2 pr-2">
                      <div className="h-px bg-[#D0D7DE]"></div>
                    </div>
                  )}
                </Fragment>
              ))}
            </div>
          )}

          <div className="pt-4">
            <Dropzone
              accept={{
                "image/jpeg": [],
                "image/png": [],
                "application/pdf": [],
              }}
              maxSize={10000000}
              onDropAccepted={handleDrop}
              onDropRejected={handleRejection}
              noDrag
            >
              {({ getRootProps, getInputProps }) => (
                <section className="h-8 flex justify-center items-center rounded-lg text-white bg-blue-700 text-center cursor-pointer">
                  <div {...getRootProps()}>
                    <input {...getInputProps()} className="hidden" />
                    Select File
                  </div>
                </section>
              )}
            </Dropzone>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
