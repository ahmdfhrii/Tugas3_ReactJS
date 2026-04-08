import React from 'react';
import books from '../../../Utils/books';

export default function ProductList() {
    const bestSellers = books.slice(0, 6);

    return (
        <>
            <section className="py-5 text-center container">
                <div className="row py-lg-5">
                    <div className="col-lg-6 col-md-8 mx-auto">
                        <h1 className="fw-light">Best Seller</h1>
                        <p className="lead text-body-secondary">
                            Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.
                        </p>
                        <p>
                            <a href="#product" className="btn btn-primary my-2 m-2">View</a>
                            <a href="#" className="btn btn-secondary my-2">Other Book</a>
                        </p>
                    </div>
                </div>
            </section>
            
            <div className="album py-5 bg-body-tertiary" id="product">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                        {bestSellers.map((book) => (
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
                                        <p className="card-text text-muted" style={{ fontSize: "0.9rem" }}>
                                            {book.description}
                                        </p>
                                        <div className="d-flex justify-content-between align-items-center mt-auto">
                                            <div className="btn-group w-100">
                                                <button type="button" className="btn btn-sm btn-outline-secondary w-50">View</button>
                                                <button type="button" className="btn btn-sm btn-outline-primary w-50 fw-semibold">Pesan</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </>
    );
}