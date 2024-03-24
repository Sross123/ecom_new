import React from 'react'

const index = () => {
  return (
    <Layout>
      <section className="flex h-auto space-x-3">
        <div className="">
          <Filter />
        </div>
        <div className="grid grid-cols-3 h-fit gap-3 gap-y-5">
          {data &&
            data.map((val, index) => (
              <div
                key={index}
                onClick={() => navigateToSingleProduct(val?.p_id)}
              >
                <SingleGlassItem value={val} />
              </div>
            ))}
        </div>
      </section>
    </Layout>
  )
}

export default index