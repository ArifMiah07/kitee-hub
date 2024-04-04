

const Feature = ({cat}) => {
    const {name, id, title, imgUrl} = cat;
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={imgUrl} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{title}</p>
      </div>
    </div>
    );
};

export default Feature;