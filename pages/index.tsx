import { defineComponent, useContext } from '@nuxtjs/composition-api'
import styles from './-styles.module.css'
import { useState } from '~/plugins/useState'

type SameSite = 'none' | 'lax' | 'strict' | undefined

export default defineComponent({
  setup() {
    const ctx = useContext()
    const [id, setId] = useState('')
    const [res, setRes] = useState('')
    const [prevSamesite, setPrevSamesite] = useState<SameSite>()
    const fetchMe = async () => {
      const res = await ctx.$api2.me.$get().catch(() => null)
      setRes(
        !res
          ? 'Failure'
          : res.status === 'login'
          ? `success: ID=${res.id}`
          : 'logout'
      )
    }
    const post = async (sameSite: SameSite) => {
      setRes('')
      await ctx.$api.session.$delete({ body: { sameSite: prevSamesite.value } })
      await ctx.$api.session.$post({ body: { id: id.value, sameSite } })
      setPrevSamesite(sameSite)
      await fetchMe()
    }

    return () => (
      <div class={styles.container}>
        <div>
          <h1 class={styles.title}>cookie-test</h1>
          <input
            type="text"
            placeholder="ID"
            value={id.value}
            onInput={(e) =>
              e.target instanceof HTMLInputElement && setId(e.target.value)
            }
          />
          {([undefined, 'none', 'lax', 'strict'] as const).map((samesite) => (
            <div key={samesite}>
              <button onClick={() => post(samesite)}>
                Samesite={samesite ?? 'undefined'}
              </button>
            </div>
          ))}
          <div>res: {res.value}</div>
        </div>
      </div>
    )
  }
})
