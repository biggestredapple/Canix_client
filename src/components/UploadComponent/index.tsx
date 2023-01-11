import React, { useState, useEffect } from 'react';
import { message } from 'antd';
import { UploadButton } from './index.style';

const UploadComponent = () => {
    const [fileList, setFileList] = useState<FileList>()

    useEffect(() => {
        fetch('http://localhost:3000/scales', {
            method: 'get',
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.log(error));
    }, [])

    const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFileList(event.target.files!);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (fileList) {
            // const formData = new FormData();

            // console.log("files: ", fileList);

            const upload = Array.from(fileList).map((file) => {
                const formData = new FormData();
                formData.append('file', file);

                return fetch('http://localhost:3000/upload', {
                    method: 'POST',
                    body: formData
                })
                    .catch(error => console.log(error));
            });

            Promise.all(upload)
                .then(() => {
                    message.success("Upload success");
                    setFileList(undefined)
                })
                .catch(() => message.error("Upload failed"))

        }
    }

    return (
        <UploadButton>
            <form onSubmit={handleSubmit}>
                <input type="file" accept='text/csv' multiple={true} onChange={onImageChange} />
                <input type='submit' />
            </form>
        </UploadButton>
    )
}

export default UploadComponent;