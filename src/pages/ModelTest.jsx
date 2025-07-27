import React, { useState, useRef } from 'react';
import predict from '../api/prediction';
import { useNavigate } from 'react-router-dom';

const ModelTest = () => {
  const [username, setUsername] = useState('');
  const [extension, setExtension] = useState('jpg');
  const [imageData, setImageData] = useState('');
  const [preview, setPreview] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState(null)
  const fileInput = useRef(null);
  const navigate = useNavigate()

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => setPreview(e.target.result);
    reader.readAsDataURL(file);

    const base64Reader = new FileReader();
    base64Reader.onload = () => {
      const base64 = base64Reader.result.split(',')[1]; 
      setImageData(base64);
      setExtension(file.name.split('.').pop().toLowerCase());
    };
    base64Reader.readAsDataURL(file);
  };

 const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setIsLoading(true);

    if (!imageData) {
      setMessage('Please upload an image');
      setIsLoading(false);
      return;
    }

    const formData = {
      username,
      extension,
      imageData
    };

    const result = await predict(formData);
    
    setMessage(result.message);
    console.log(result.data)
    setResult(result.data)
    
    if (result.success) {
      setUsername('');
      setExtension('jpg');
      setImageData('');
      setPreview('');
      if (fileInput.current) {
        fileInput.current.value = '';
      }
    }

    setIsLoading(false);


    navigate("/finalresult", {
        state: {
            username: username,
            prediction: result.data.prediction 

        }
    })
  };

  return (
    <div style={styles.container}>
      <div style={styles.background}></div>
      <h2 style={styles.header}>MNIST Model Test</h2>
      
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
            required
          />
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Image Format:</label>
          <select
            value={extension}
            onChange={(e) => setExtension(e.target.value)}
            style={styles.input}
          >
            <option value="jpg">JPG</option>
            <option value="png">PNG</option>
          </select>
        </div>

        <div style={styles.formGroup}>
          <label style={styles.label}>Upload Image:</label>
          <input
            type="file"
            ref={fileInput}
            onChange={handleImageUpload}
            accept="image/*"
            style={styles.fileInput}
            required
          />
        </div>

        {preview && (
          <div style={styles.previewWrapper}>
            <img src={preview} alt="Preview" style={styles.preview} />
          </div>
        )}

        <button type="submit" style={styles.button}>
          Submit to Model
        </button>

        {message && <p style={styles.message}>{message}</p>}
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '500px',
    margin: '20px auto',
    padding: '20px',
    backgroundColor: 'grey',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  },
  header: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px'
  },
  label: {
    fontWeight: 'bold',
    fontSize: '14px'
  },
  input: {
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ddd'
  },
  fileInput: {
    padding: '6px 0'
  },
  previewWrapper: {
    margin: '10px 0',
    textAlign: 'center'
  },
  preview: {
    maxWidth: '100%',
    maxHeight: '200px',
    border: '1px solid #eee',
    borderRadius: '4px'
  },
  button: {
    padding: '10px',
    backgroundColor: '#000000',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '10px'
  },
  message: {
    textAlign: 'center',
    color: '#000000',
    marginTop: '10px'
  },

  background: {
        backgroundImage: "url('https://codetolight.wordpress.com/wp-content/uploads/2017/11/network.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "fixed", 
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        filter: "blur(3px)",
        zIndex: -1,
    },
};

export default ModelTest;