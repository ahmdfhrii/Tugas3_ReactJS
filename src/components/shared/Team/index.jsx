export default function Team(){
    return(
        <>
            <section className="py-5 text-center container">
              <div className="row py-lg-5">
                <div className="col-lg-8 col-md-10 mx-auto">
                  <h2 className="fw-light mb-4">Tim Kami</h2>
                  <p className="lead text-body-secondary mb-5">Orang-orang hebat di balik berjalannya project ini.</p>
                  
                  <div className="row text-center">
                    <div className="col-lg-4 mb-4">
                       <img 
                        src="https://awsimages.detik.net.id/visual/2021/11/12/ilustrasi-manusia-jenius-dok-freepik_169.jpeg?w=1200"  
                        className="rounded-circle mb-3" 
                        width="140" 
                        height="140" 
                        style={{ objectFit: "cover" }} 
                      />
                      <h3 className="fw-normal">Ahmad Fachri</h3>
                      <p className="text-muted">Backend Developer</p>
                    </div>
                    
                    <div className="col-lg-4 mb-4">
                      <img 
                        src="https://www.yesdok.com/visual/slideshow/article_f99a4a3cff19f81a0687def7032d8b39b6d0a68a.jpg?w=1200"  
                        className="rounded-circle mb-3" 
                        width="140" 
                        height="140" 
                        style={{ objectFit: "cover" }} 
                      />
                      <h3 className="fw-normal">Agung</h3>
                      <p className="text-muted">Frontend Developer</p>
                    </div>

                    <div className="col-lg-4 mb-4">
                       <img 
                        src="https://awsimages.detik.net.id/community/media/visual/2018/03/03/39f24229-6f26-4a17-aa92-44c3bd3dae9e_43.jpeg?w=600&q=90"  
                        className="rounded-circle mb-3" 
                        width="140" 
                        height="140" 
                        style={{ objectFit: "cover" }} 
                      />
                      <h3 className="fw-normal">Asep</h3>
                      <p className="text-muted">UI/UX</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
        </>
    )
}