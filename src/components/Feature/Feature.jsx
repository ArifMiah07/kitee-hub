import PropTypes from 'prop-types'; // ES6

const Feature = ({cat}) => {
    const {name, id, title, imgUrl} = cat;
    return (
        <>
            <div className=" flex flex-col justify-between max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src={imgUrl} alt={name} />
                <div className="px-6 py-4">
                    <div >
                        <h1 className="font-bold text-xl mb-2">{name} <span><sup>{id}</sup></span></h1>
                    </div>
                    <p className="text-gray-700 text-base mb-3">{title}</p>
                    <div>
                        <button className="text-white font-semibold px-4 py-2 bg-pink-600 hover:bg-blue-600 rounded-xl">Buy Now</button>
                    </div>
                </div>
            </div>
        </>
    );
};



Feature.propTypes = {
    cat: PropTypes.object
}
export default Feature;