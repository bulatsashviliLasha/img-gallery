import {useEffect, useState} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.jsx';
import Search from './components/Search.jsx';
import ImageCard from './components/ImageCard.jsx';
import Spinner from './components/Spinner.jsx';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Welcome from './components/Welcome.jsx';

const API_URL = import.meta.env.REACT_APP_API_URL || 'http://127.0.0.1:5050';

const App = () => {
    const [word, setWord] = useState('');
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getSavedImages() {
            try {
                const res = await axios.get(`${API_URL}/images`);
                setImages(res.data || []);
                setLoading(false);
            } catch (e) {
                console.log(e)
            }
        }

        getSavedImages();
    }, []);

    const handleSearchSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.get(`${API_URL}/new-image?query=${word}`);
            setImages([{...res.data, title: word}, ...images]);
        } catch (err) {
            console.log(err);
        }

        setWord('');
    };

    const handleDeleteImage = async (id) => {
        try {
            const res = await axios.delete(`${API_URL}/images/${id}`);
            if (res.data?.deleted_id) {
                setImages(images.filter((item) => item.id !== id));
            }
        } catch (e) {
            console.log(e)
        }

    };

    const handleSaveImage = async (id) => {
        const imageToBeSaved = images.find((image) => image.id === id);
        imageToBeSaved.saved = true;
        try {
            const res = await axios.post(`${API_URL}/images`, imageToBeSaved);
            if (res.data?.inserted_id) {
                setImages(images.map((image) => image.id === id ? {...image, saved: true} : image));
            }
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div>
            <Header title="Images Gallery"/>
            {loading ? <Spinner/> : <><Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit}/>
                <Container className="mt-4">
                    {images.length ? (
                        <Row xs={1} md={2} lg={3}>
                            {images.map((item, index) => (
                                <Col key={index} className="pb-3">
                                    <ImageCard image={item} deleteImage={handleDeleteImage}
                                               saveImage={handleSaveImage}/>
                                </Col>
                            ))}
                        </Row>
                    ) : (
                        <Welcome/>
                    )}
                </Container></>}
        </div>
    );
};

export default App;
