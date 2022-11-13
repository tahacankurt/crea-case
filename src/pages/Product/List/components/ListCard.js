const ListCard = ({product}) => {
    return (

        <div className="group relative">
            <div
                className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img
                    src={product.cdnUrl}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm text-gray-700">
                        <a href="#">
                            <span aria-hidden="true" className="absolute inset-0"></span>
                            {product.title}
                        </a>
                    </h3>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.currency} {product.price}</p>
            </div>
        </div>
    )
}

export default ListCard;