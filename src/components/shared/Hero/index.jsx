export default function Hero(){
    return(
        <>
              <div className="container my-5">
                <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                    <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                        <h1 className="display-4 fw-bold lh-1 text-body-emphasis">Selamat Datang di Dunia Pengetahuan</h1>
                        <p className="lead">Dari buku best seller hingga rilis terbaru, temukan semua bacaan berkualitas yang kamu butuhkan untuk memperluas wawasan di Bookstore.</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Buy Now</button>
                            <button type="button" className="btn btn-outline-secondary btn-lg px-4">Detail</button>
                        </div>
                    </div>
                    <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                        <img className="rounded-lg-3" src="https://awsimages.detik.net.id/community/media/visual/2024/09/03/1498878143_169.jpeg?w=600&q=90" alt="" width="720"/>
                    </div>
                </div>
            </div>
        </>
    )
}