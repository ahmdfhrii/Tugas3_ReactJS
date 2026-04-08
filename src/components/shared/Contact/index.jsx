export default function Contact(){
    return(
        <>
        <section className="py-5 bg-body-tertiary">
              <div className="container">
                <div className="row text-center mb-4">
                  <div className="col-lg-8 mx-auto">
                    <h2 className="fw-light">Hubungi Kami</h2>
                    <p className="lead text-body-secondary">
                      Punya pertanyaan, kritik, atau masukan untuk pengembangan sistem ini? Jangan ragu untuk mengirimkan pesan kepada kami.
                    </p>
                  </div>
                </div>
                
                <div className="row justify-content-center">
                  <div className="col-md-8 col-lg-6">
                    <div className="card shadow-sm border-0">
                      <div className="card-body p-4 p-md-5">
                        <form>
                          <div className="row g-3">
                            <div className="col-sm-6">
                              <label htmlFor="firstName" className="form-label">Nama Depan</label>
                              <input type="text" className="form-control" required />
                            </div>
                            
                            <div className="col-sm-6">
                              <label htmlFor="lastName" className="form-label">Nama Belakang</label>
                              <input type="text" className="form-control"/>
                            </div>

                            <div className="col-12">
                              <label htmlFor="email" className="form-label">Alamat Email</label>
                              <input type="email" className="form-control" required />
                            </div>

                            <div className="col-12">
                              <label htmlFor="message" className="form-label">Pesan</label>
                              <textarea className="form-control" id="message" rows="5" required></textarea>
                            </div>

                            <div className="col-12 text-center mt-4">
                              <button type="submit" className="btn btn-primary w-100 py-2">Kirim Pesan</button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
        </>
    )
}