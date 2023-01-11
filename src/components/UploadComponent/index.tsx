import React, { useState, useEffect, useRef } from 'react';
import { UploadButton } from './index.style';

import { BASE_SERVER_API_URL } from '../../config';

type Props = {
    setStateMsg: Function,
    setStatus: Function
}

const UploadComponent: React.FC<Props> = ({ setStateMsg, setStatus }) => {
    const API_URL = process.env.REACT_APP_SERVER || BASE_SERVER_API_URL;
    const fileRef = useRef<HTMLInputElement | null>(null);

    const [fileList, setFileList] = useState<FileList>()


    const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFileList(event.target.files!);
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (fileList) {
            const upload = Array.from(fileList).map((file) => {
                const formData = new FormData();
                formData.append('file', file);

                return fetch(`${API_URL}/upload`, {
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
                        setFileList(undefined);
                        if (fileRef.current) fileRef.current.value = "";
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
                <input ref={fileRef} type="file" accept='text/csv' multiple={true} onChange={onImageChange} />
                <input type='submit' />
            </form>
        </UploadButton>
    )
}

export default UploadComponent;