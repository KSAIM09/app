// Cards.jsx

const Cards = () => {
    return (
      <div className="mt-8 flex flex-col items-center sm:flex-row sm:flex-wrap sm:justify-center lg:items-end gap-4 md:gap-6 lg:gap-6 mb-2">
        <div
          className="bg-slate-500 rounded-md h-[300px] w-[200px] md:h-[350px] md:w-[250px] lg:h-[400px] lg:w-[300px]"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1665242043190-0ef29390d289?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        
        <div className="bg-gray-800 rounded-md h-[200px] w-[150px] md:h-[240px] md:w-[130px] lg:h-[280px] lg:w-[200px] text-white flex items-center justify-center flex-col text-center">
          <h1 className="text-xl font-semibold lg:text-4xl mb-4">100+</h1>
          <p className="text-sm text-gray-300 lg:text-lg">Our Esteemed Clients and Partners</p>
        </div>
        
        <div className="bg-slate-100 rounded-md h-[150px] w-[250px] md:h-[150px] md:w-[300px] lg:h-[200px] lg:w-[350px] flex items-end text-xl text-white font-bold justify-center lg:text-3xl"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1682345262055-8f95f3c513ea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >Scroll To Know More</div>
        
        <div className="bg-slate-950 rounded-md h-[200px] w-[150px] md:h-[240px] md:w-[130px] lg:h-[280px] lg:w-[200px] text-white flex items-center justify-center flex-col text-center">
          <h1 className="text-xl font-semibold lg:text-4xl mb-4">6+</h1>
          <p className="text-sm text-gray-300 lg:text-lg">Years of Dedicated Service</p>
        </div>
        
        <div
          className="bg-slate-500 rounded-md h-[300px] w-[200px] md:h-[350px] md:w-[250px] lg:h-[400px] lg:w-[300px]"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1683294494519-b3097c3ddd4e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
    );
  };
  
  export default Cards;
  