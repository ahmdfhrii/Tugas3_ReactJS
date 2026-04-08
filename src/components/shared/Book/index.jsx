import React, { useState } from 'react';
import books from '../../../Utils/books'; 
export default function Book() {
    const [bookList, setBookList] = useState(books);
    const [newBook, setNewBook] = useState({
        title: '',
        author: '',
        year: '',
        description: '',
        image: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewBook({
            ...newBook,
            [name]: value
        });
    };

    const handleAddBook = (e) => {
        e.preventDefault();
        
        const bookToAdd = {
            id: bookList.length + 1,
            title: newBook.title,
            author: newBook.author,
            year: newBook.year,
            description: newBook.description,
            image: newBook.image ? newBook.image : "https://placehold.co/150x225?text=Buku+Baru"
        };

        setBookList([...bookList, bookToAdd]);
        setNewBook({ title: '', author: '', year: '', description: '', image: '' });
    };

    return (
        <div className="container py-5">
            <div className="text-center mb-5">
                <h1 className="fw-light">Semua Koleksi Buku</h1>
                <p className="lead text-body-secondary">Jelajahi seluruh koleksi buku bacaan kami di sini.</p>
            </div>

            {/* --- FORM TAMBAH BUKU (BONUS TUGAS POINT 7) --- */}
            <div className="card shadow-sm mb-5 mx-auto" style={{ maxWidth: '600px' }}>
                <div className="card-header bg-primary text-white">
                    <h5 className="mb-0">Tambah Buku Baru</h5>
                </div>
                <div className="card-body">
                    <form onSubmit={handleAddBook}>
                        <div className="mb-3">
                            <label className="form-label fw-semibold">Judul Buku</label>
                            <input type="text" className="form-control" name="title" value={newBook.title} onChange={handleInputChange} required />
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label className="form-label fw-semibold">Penulis</label>
                                <input type="text" className="form-control" name="author" value={newBook.author} onChange={handleInputChange} required />
                            </div>
                            <div className="col-md-6">
                                <label className="form-label fw-semibold">Tahun Terbit</label>
                                <input type="number" className="form-control" name="year" value={newBook.year} onChange={handleInputChange} required />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label fw-semibold">URL Gambar</label>
                            <input type="text" className="form-control" name="image" value={newBook.image} onChange={handleInputChange} placeholder="https://..." />
                        </div>
                        <div className="mb-3">
                            <label className="form-label fw-semibold">Deskripsi</label>
                            <textarea className="form-control" name="description" rows="3" value={newBook.description} onChange={handleInputChange} required></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary w-100 fw-bold">Tambah Data</button>
                    </form>
                </div>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                {bookList.map((book) => (
                    <div className="col" key={book.id}>
                        <div className="card shadow-sm h-100">
                            <img 
                                src={book.image} 
                                alt={book.title}
                                className="card-img-top" 
                                style={{ height: "225px", objectFit: "contain", backgroundColor: "#f8f9fa", padding: "10px" }} 
                            />
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title fw-bold">{book.title}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{book.author} - {book.year}</h6>
                                <p className="card-text text-muted mt-2" style={{ fontSize: "0.9rem" }}>
                                    {book.description}
                                </p>
                                <div className="d-flex justify-content-between align-items-center mt-auto pt-3">
                                    <div className="btn-group w-100">
                                        <button type="button" className="btn btn-sm btn-outline-secondary w-50">Detail</button>
                                        <button type="button" className="btn btn-sm btn-primary w-50 fw-semibold">Pinjam</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}