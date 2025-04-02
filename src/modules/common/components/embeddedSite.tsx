const EmbeddedSite = () => {
    return (
        <div style={{ width: "100%", height: "100vh", overflow: "hidden" }}>
            <iframe
                src="https://www.mipagoamigo.com/MPA_WebSite/ServicePayments/"
                width="100%"
                height="100%"
                style={{ border: "none" }}
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default EmbeddedSite;
