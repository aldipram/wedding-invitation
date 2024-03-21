import { useState } from "react";

const Clipboard = () => {
  const [copySuccess, setCopySuccess] = useState(false);
  const address = 'Blok Sarimukti RT 01 RW 01 Desa Cintaasih Kec. Cingambul Kab. Majalengka';

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setCopySuccess(true);
      setTimeout(() => {
        setCopySuccess(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div>
      <div className="bg-[#ffffff] p-5 rounded-xl">
        <p className="font-poppins pb-2">{address}</p>
        <button onClick={copyToClipboard} className="bg-[rgba(27,64,126,255)] text-white font-semibold font-poppins py-2 px-4 rounded-md">
          {copySuccess ? 'Disalin!' : 'Salin Alamat'}
        </button>
      </div>
    </div>
  );
};

export default Clipboard;