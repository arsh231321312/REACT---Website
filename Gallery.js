


import YouTube from 'react-youtube';
export function Profile({html,width,height,alt}) {
    return (
      <img 
        src= {html}
        alt="Marmot in the wild"
        width={width}
        height={height}
        />
    );
  }
  const background={
    name: 'Marmot Heaven!',
    theme: {
      backgroundColor: '#31573b',
       color: '#03bafc'
    }
  };
  const backdrop={
    name: 'Welcome to ',
    theme: {
      backgroundColor: '#31573b',
      color: 'white'
    }
  }
  export function Marmot_heaven(){
    return (
      <section>
        <div style={{ display: 'flex' }}>
          <h1 style={{...backdrop.theme, width: "16vw", position: 'relative', top: "0vh", left: "42vw"}}>
            {backdrop.name} <hi style={background.theme}>{background.name}</hi>
          </h1>
          <h1 style={{...backdrop.theme, width: "17.3vw", position: 'relative', top: "0vh", left: "51.5vw"}}>Made by Carmen & Arsh & Ash</h1>
        </div>
        
        <h3 style={{...backdrop.theme , width: 918,height: 30, fontSize: "20px", textAlign: 'left',position: 'relative', top: "0vh", left: "0vw" ,marginTop: "0vh"}}>
          Welcome to WatchMojo where will talk about the top 2 best marmot pictures of all time.
        </h3>
        
        <ul >
          <li>In the first image, we have a marmot Steve standing and appreciating the scenery</li>
          <li>In the second image, a group of mamrot cousins surround a mysterious object with curiousity</li>
        </ul>
        <Profile html="https://i0.wp.com/www.molecularecologist.com/wp-content/uploads/2020/10/2020_10_15-marmot.jpg?resize=626%2C899&ssl=1" width={250} height={300}/>
        <img 
          src= "https://i.dailymail.co.uk/i/pix/2012/09/12/article-2202033-14F938D9000005DC-768_634x585.jpg"
          alt="Marmots discovers camera"
          width={285}
          height={300}
        />

        <div>
          <h2>Marmot Pamper Time</h2>
          <YouTube videoId={'44pnW_kiJGA'}/>
        </div>
      </section>

    )
  }