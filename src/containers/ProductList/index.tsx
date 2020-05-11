import React, { FC, memo } from 'react';
import { useProductList } from './utils';

export const ProductListsComponent: FC = () => {
  const { handleGetIds, ids } = useProductList();
  return (
    <div>
      <div>
        <button onClick={handleGetIds} type="button">
          Get Ids
        </button>
      </div>
      {ids && (
        <pre>
          <code>{JSON.stringify(ids, null, 2)}</code>
        </pre>
      )}
    </div>
  );
};

const ProductLists = memo(ProductListsComponent);
ProductLists.displayName = 'ProductLists';
export default ProductLists;
