function Label({status}) {
  const color = status == 'pending' && 'orange' || status == 'cancelled' && 'red' || 'green'
  const box = `border-${color}-400 text-${color}-400 bg-${color}-400/30`
  return (
    <div className={`w-20 p-1.5 flex justify-center rounded-3xl border ${box}`}>
      {status}
    </div>
  )
}

export default Label
