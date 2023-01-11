import React, { useState, useEffect } from 'react';
import { UploadButton } from './index.style';

type Props = {
    setStateMsg: Function,
    setStatus: Function
}

const UploadComponent: React.FC<Props> = ({ setStateMsg, setStatus }) => {
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
                    .then(res => res.json())
                    .catch(error => console.log(error));
            });

            Promise.all(upload)
                .then((res) => {
                    if (res[0].message === "success") {
                        setStateMsg("Upload success");
                        setStatus(true);
                        setFileList(undefined)
                    } else {
                        setStateMsg('Upload Failed');
                    }
                })
                .catch(() => { setStateMsg('Upload Failed') })

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