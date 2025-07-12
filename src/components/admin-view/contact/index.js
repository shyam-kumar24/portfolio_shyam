'use client'

export default function AdminContactView({data}){
    return <div className="flex flex-col gap-5">
        {
            data && data.length ? data.map((item) => (
                <div className="border p-5">
                    <p>{item.name}</p>
                    <p>{item.email}</p>
                    <p>{item.message}</p>
                </div>
            )) : null
        }
    </div>
}