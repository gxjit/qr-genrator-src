import qrcode from 'qrcode-generator'

export default textString => {
  const qr = qrcode(0, 'M')
  qr.addData(textString)
  qr.make()
  const svgTag = qr.createSvgTag(4) // 4 = size
  const path = svgTag.match(/<path d="(.*?) " /)[0].replace(/"|<path d=/g, '')
  const width = svgTag.match(/width="(\d*?)px"/)[0].replace(/\D/g, '')
  return { path, width }
}
