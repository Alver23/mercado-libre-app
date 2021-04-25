// Dependencies
import Image from 'next/image';
import { FC, ReactElement } from 'react';

// Commons
import numberFormat from '@alversoft/client/commons/app';

// Interfaces
import IProductDetailProps from './interfaces';

const ProductDetail: FC<IProductDetailProps> = ({
  title,
  description,
  picture,
  price,
}: IProductDetailProps): ReactElement => {
  const { amount, currency } = price;
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-3 md:col-span-2">
        <div className="md:ml-16 mt-6">
          <Image src={picture} alt={title} width={680} height={680} />
        </div>
      </div>
      <div className="col-span-3 md:col-span-1">
        <div className="md:mt-6">
          <p className="mb-3 text-xs md:text-sm text-gray-500">Nuevo - 234 vendidos</p>
          <p className="w-full md:w-4/5 text-xl mb-6 md:text-2xl text-black-500">{title}</p>
          <p className="text-4xl md:text-5xl text-black-500 mb-6" suppressHydrationWarning>
            {numberFormat(amount, currency)}
          </p>
          <button
            type="button"
            className="w-full md:w-3/5 rounded-md text-white py-2 md:text-lg px-8 hover:bg-blue-600 bg-blue-500"
          >
            Comprar
          </button>
        </div>
      </div>
      <div className="col-span-3 col-span-3 md:col-span-2 md:pl-6 pb-6">
        <h3 className="mb-6 text-2xl text-black-500">Descripción del producto</h3>
        <p className="text-gray-500" dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  );
};

export default ProductDetail;
