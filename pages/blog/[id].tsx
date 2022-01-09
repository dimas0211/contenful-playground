import React from 'react';
import { useRouter } from 'next/router'

const _blog = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      Blog: {id}
    </div>
  );
}

export default _blog;
