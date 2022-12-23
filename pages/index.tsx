import { defineComponent, useContext } from '@nuxtjs/composition-api'
import styles from './-styles.module.css'
import { useState } from '~/plugins/useState'

export default defineComponent({
  setup() {
    const ctx = useContext()
    const [id1, setId1] = useState('')
    const [id2, setId2] = useState('')
    const [res1, setRes1] = useState('')
    const [res2, setRes2] = useState('')
    const post1 = async () => {
      await ctx.$api.session.$post({ body: { id: id1.value } })
      await ctx.$api2.me.$get()
      ctx.$api.$get().then(setRes1)
    }
    const get2 = () => ctx.$api2.$get().then(setRes2)

    return () => (
      <div class={styles.container}>
        <div>
          <h1 class={styles.title}>cookie-test</h1>
          ID1:{' '}
          <input
            type="text"
            value={id1.value}
            onInput={(e) =>
              e.target instanceof HTMLInputElement && setId1(e.target.value)
            }
          />
          <button onClick={post1}>POST1</button>
          <div>res1: {res1.value}</div>
          ID2:{' '}
          <input
            type="text"
            value={id2.value}
            onInput={(e) =>
              e.target instanceof HTMLInputElement && setId2(e.target.value)
            }
          />
          <button onClick={get2}>POST2</button>
          <div>res2: {res2.value}</div>
        </div>
      </div>
    )
  }
})
