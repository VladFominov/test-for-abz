import React from 'react'

import styles from "./_upload.module.scss"
function UploadInput({ onChange }) {
  return (
    <div className={styles.uploadContainer}>
      <label className={styles.uploadBtnText} htmlFor="file-upload">
        Upload
      </label>
      <p className={styles.uploadText}>Upload your photo</p>
      <input onChange={onChange} id="file-upload" type="file" />
      
      <div class="invalid-feedback">Please, upload your photo</div>
    </div>
  );
}

export default UploadInput