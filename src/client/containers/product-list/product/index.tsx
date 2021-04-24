// Dependencies
import Image from 'next/image';
import { FC, ReactElement } from 'react';

// Commons
import numberFormat from '@alversoft/client/commons/app';

// Interfaces
import IProductDetailProps from './interfaces';

const ProductDetail: FC<IProductDetailProps> = ({
  title,
  price,
  freeShipping,
  picture,
  id,
  onNavigateToDetail,
}: IProductDetailProps): ReactElement => {
  const { amount, currency } = price;
  return (
    <div className="divide-y divide-gray-400">
      <div className="py-4 md:py-6 flex flex-col md:flex-row justify-center md:justify-start items-center">
        <Image
          src={picture}
          alt={title}
          width={180}
          height={180}
          className="rounded cursor-pointer"
          onClick={() => onNavigateToDetail(id)}
          role="button"
          aria-hidden
        />
        <div className="py-4 md:py-0 px-6 w-full md:w-3/5 flex justify-center items-center md:items-start flex-col">
          <div
            className="mb-4 md:mb-6 flex flex-row items-center  cursor-pointer"
            onClick={() => onNavigateToDetail(id)}
            role="button"
            aria-hidden
          >
            <p className="text-xl md:text-2xl text-black-500" suppressHydrationWarning>
              {numberFormat(amount, currency)}
            </p>
            {freeShipping && (
              <div className="ml-2 flex items-center">
                <Image src="/assets/ic_shipping.png" alt="Free shipping" width={20} height={20} />
              </div>
            )}
          </div>
          <p className="text-base md:text-lg">{title}</p>
        </div>
      </div>
      <div />
    </div>
  );
};

export default ProductDetail;
