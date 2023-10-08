import Logo from "@/assets/Logo.png"

const Footer = () => {
    return <footer className="bg-primary-100 py-16">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
            <div className="mt-16 basis-1/2 md:mt-0">
                <img alt="logo" src={Logo} />
                <p className="my-5">
                    The bright future of Camoes.Ai and the power of AI Image Generator are closer than ever!"
                </p>
                <p>© Camões.Ai All Rights Reserved.</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Links</h4>
                <p className="my-5">Privacy Notice</p>
                <p className="my-5">Terms of Service</p>
                <p>Company Information</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Contact</h4>
                <p className="my-5">joao5d@hotmail.com</p>
                <p>925729846</p>
            </div>
        </div>
    </footer>
}

export default Footer