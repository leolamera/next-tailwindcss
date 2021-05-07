import Head from 'next/head'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Tailwind-CSS</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://unpkg.com/ionicons@5.4.0/dist/ionicons.js"></script>
      </Head>

      <body className="antialiased bg-bgDracula">
        <div className="flex w-full min-h-screen justify-center items-center" >
          <main
            className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-containerDracula w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white overflow-hidden">
            <div>
              <div className="flex flex-col space-y-8 justify-between">
                <div>
                  <h1 className="font-bold text-greenDracula text-4xl tracking-wide">
                    Fale Conosco
                  </h1>
                  <p className="pt-2 text-yellowDracula text-sm">
                    Ad sint laboris nulla aliquip aliquip. Excepteur ex fugiat esse pariatur aliquip consequat. Lorem aliqua consectetur non irure ut proident eu anim ullamco.
                  </p>
                </div>
                <div className="flex flex-col space-y-4">
                  <div className="inlineflex space-x-2 items-center text-orangeDracula text-xl">
                    <ion-icon
                      name="call"
                    ></ion-icon>
                    <span className="text-cyanDracula"> +(55) 47 991 662 635</span>
                  </div>
                  <div className="inlineflex space-x-2 items-center text-orangeDracula text-xl">
                    <ion-icon
                      name="mail"
                    ></ion-icon>
                    <span className="text-cyanDracula"> lameranha@gmail.com</span>
                  </div>
                  <div className="inlineflex space-x-2 items-center text-orangeDracula text-xl">
                    <ion-icon
                      name="logo-github"
                    ></ion-icon>
                    <span className="text-cyanDracula"> @leolamera</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute z-0 w-40 h-40 bg-pinkDracula rounded-full -right-28 -top-28"></div>
              <div className="absolute z-0 w-40 h-40 bg-pinkDracula rounded-full -left-28 -bottom-28"></div>

              <div className=" relative z-10 bg-formDracula rounded-xl shadow-lg p-8 text-gray-800 md:w-80">
                <form action="" class="flex flex-col space-y-4">
                  <div>
                    <label className="text-sm">Nome Completo</label>
                  </div>
                  <div>
                    <input
                      type="text"
                      className="ring-1 ring-gray-300 w-full bg-formDracula rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-purpleDracula" placeholder="Digite seu nome completo"
                    ></input>
                  </div>
                  <div>
                    <label className="text-sm">E-mail</label>
                  </div>
                  <div>
                    <input
                      type="email"
                      className="ring-1 ring-gray-300 w-full bg-formDracula rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-purpleDracula" placeholder="Digite seu e-mail"
                    ></input>
                  </div>
                  <div>
                    <label className="text-sm">Nome Completo</label>
                  </div>
                  <div>
                    <textarea
                      placeholder="Escreva sua mensagem aqui"
                      rows="4"
                      className="ring-1 ring-gray-300 w-full bg-formDracula rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-purpleDracula"
                    ></textarea>
                  </div>
                  <button className="inline-block self-end bg-containerDracula text-greenDracula hover:text-bgDracula hover:bg-greenDracula font-bold rounded-lg px-6 py-2 uppercase text-sm">Enviar Mensagem</button>
                </form>
              </div>
            </div>
          </main>
        </div>
      </body>
    </div>
  )
}
