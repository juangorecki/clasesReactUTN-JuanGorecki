import '../css/mapa.css'
const Mapa = (props) => {
    return (
        <div className="mapa">
            <h2>Ubicacion</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13135.09687334948!2d-58.43292617755846!3d-34.60987040666271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcca5e41da17ff%3A0xebce9fad2698f23f!2sAlmagro%2C%20CABA!5e0!3m2!1ses!2sar!4v1700789819876!5m2!1ses!2sar" style={{
                width: 600, height: 450, border: 0

            }}></iframe>
        </div>

    )

}




export default Mapa;