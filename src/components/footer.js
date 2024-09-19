function Footer() {
  return (

    <div className="footer flex item-center min-h-[48px] shadow-[0px_1px_0px_0px_#E5E5EA_inset] px-3">
      <div className="w-10 flex justify-center items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" d="M1.5 8C1.5 6.27609 2.18482 4.62279 3.40381 3.40381C4.62279 2.18482 6.27609 1.5 8 1.5C9.72391 1.5 11.3772 2.18482 12.5962 3.40381C13.8152 4.62279 14.5 6.27609 14.5 8C14.5 9.72391 13.8152 11.3772 12.5962 12.5962C11.3772 13.8152 9.72391 14.5 8 14.5C6.27609 14.5 4.62279 13.8152 3.40381 12.5962C2.18482 11.3772 1.5 9.72391 1.5 8ZM8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0ZM5 8C5.26522 8 5.51957 7.89464 5.70711 7.70711C5.89464 7.51957 6 7.26522 6 7C6 6.73478 5.89464 6.48043 5.70711 6.29289C5.51957 6.10536 5.26522 6 5 6C4.73478 6 4.48043 6.10536 4.29289 6.29289C4.10536 6.48043 4 6.73478 4 7C4 7.26522 4.10536 7.51957 4.29289 7.70711C4.48043 7.89464 4.73478 8 5 8ZM12 7C12 7.26522 11.8946 7.51957 11.7071 7.70711C11.5196 7.89464 11.2652 8 11 8C10.7348 8 10.4804 7.89464 10.2929 7.70711C10.1054 7.51957 10 7.26522 10 7C10 6.73478 10.1054 6.48043 10.2929 6.29289C10.4804 6.10536 10.7348 6 11 6C11.2652 6 11.5196 6.10536 11.7071 6.29289C11.8946 6.48043 12 6.73478 12 7ZM5.32 9.636C5.48134 9.52303 5.68064 9.47806 5.87486 9.51081C6.06908 9.54355 6.24262 9.65138 6.358 9.811L6.365 9.82C6.46785 9.93795 6.58549 10.0421 6.715 10.13C6.979 10.308 7.398 10.5 8 10.5C8.602 10.5 9.02 10.308 9.285 10.129C9.41451 10.0411 9.53215 9.93695 9.635 9.819L9.642 9.811C9.75737 9.64895 9.93239 9.53937 10.1285 9.50637C10.3247 9.47336 10.526 9.51963 10.688 9.635C10.85 9.75037 10.9596 9.92539 10.9926 10.1215C11.0256 10.3177 10.9794 10.519 10.864 10.681L10.25 10.25C10.864 10.68 10.864 10.681 10.863 10.681V10.682L10.862 10.684L10.86 10.687L10.855 10.694L10.841 10.713C10.7848 10.7883 10.7233 10.8594 10.657 10.926C10.4963 11.0924 10.3187 11.2415 10.127 11.371C9.49722 11.7894 8.75607 12.0086 8 12C7.054 12 6.348 11.692 5.874 11.37C5.62319 11.2003 5.39676 10.9971 5.201 10.766C5.1867 10.7486 5.1727 10.7309 5.159 10.713L5.145 10.693L5.14 10.687L5.138 10.684V10.682H5.137L5.75 10.25L5.136 10.68C5.02196 10.5172 4.97718 10.3159 5.01149 10.1201C5.04581 9.92439 5.1564 9.75027 5.319 9.636H5.32Z" fill="#2C2C2E"/>
        </svg>
      </div>
      <input type="text" name="msgbox" placeholder="Start typing..." className="w-full placeholder:text-[#666668] text-sm text-[#666668] font-normal leading-5 h-max m-auto focus-visible:outline-none"/>
      <div className="flex gap-4 items-center">
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" d="M4.75 2.37004C4.01066 2.79684 3.36262 3.36508 2.84288 4.04232C2.32315 4.71956 1.9419 5.49254 1.72089 6.31713C1.27456 7.98245 1.50805 9.75687 2.37 11.25C3.23195 12.7432 4.65176 13.8328 6.31709 14.2791C7.98241 14.7254 9.75683 14.492 11.25 13.63C11.4216 13.5386 11.622 13.5174 11.8089 13.5709C11.9958 13.6244 12.1546 13.7484 12.2519 13.9168C12.3492 14.0851 12.3773 14.2846 12.3303 14.4733C12.2833 14.6619 12.1649 14.825 12 14.928C10.4875 15.8008 8.73095 16.1548 6.99845 15.9359C5.26594 15.7169 3.65266 14.9371 2.40483 13.7155C1.15701 12.4939 0.343178 10.8975 0.0875661 9.17003C-0.168046 7.44256 0.148599 5.6789 0.98917 4.14823C1.82974 2.61757 3.14807 1.40398 4.74293 0.692706C6.33779 -0.0185698 8.12158 -0.188465 9.82203 0.208952C11.5225 0.606369 13.0462 1.54927 14.1606 2.89373C15.275 4.2382 15.9189 5.91038 15.994 7.65504C15.998 7.68655 16 7.71828 16 7.75004V7.85404C16.0007 7.91737 16.0007 7.98071 16 8.04404V9.25004C16.0004 9.84571 15.8073 10.4253 15.4498 10.9018C15.0924 11.3783 14.5899 11.7259 14.0179 11.8922C13.4459 12.0586 12.8354 12.0347 12.2782 11.8242C11.721 11.6137 11.2471 11.228 10.928 10.725C10.2933 11.4069 9.4405 11.8459 8.51672 11.9663C7.59293 12.0866 6.65612 11.8807 5.8679 11.3842C5.07969 10.8876 4.48951 10.1315 4.19919 9.24636C3.90888 8.36117 3.93664 7.4024 4.27768 6.53548C4.61872 5.66856 5.25165 4.94787 6.06727 4.49774C6.8829 4.04762 7.83005 3.89629 8.74533 4.06988C9.6606 4.24346 10.4866 4.73107 11.0808 5.44856C11.6749 6.16606 12.0001 7.06845 12 8.00004V9.25004C12 9.58156 12.1317 9.8995 12.3661 10.1339C12.6005 10.3683 12.9185 10.5 13.25 10.5C13.5815 10.5 13.8995 10.3683 14.1339 10.1339C14.3683 9.8995 14.5 9.58156 14.5 9.25004V7.86704C14.477 6.73738 14.1599 5.63322 13.58 4.66348C13.0001 3.69374 12.1775 2.89191 11.1932 2.33707C10.2089 1.78224 9.09696 1.49356 7.96708 1.49952C6.8372 1.50547 5.72839 1.80586 4.75 2.37104V2.37004ZM10.5 8.00004C10.5 7.337 10.2366 6.70112 9.76777 6.23227C9.29893 5.76343 8.66304 5.50004 8 5.50004C7.33696 5.50004 6.70107 5.76343 6.23223 6.23227C5.76339 6.70112 5.5 7.337 5.5 8.00004C5.5 8.66308 5.76339 9.29897 6.23223 9.76781C6.70107 10.2366 7.33696 10.5 8 10.5C8.66304 10.5 9.29893 10.2366 9.76777 9.76781C10.2366 9.29897 10.5 8.66308 10.5 8.00004Z" fill="#3D3D3D"/>
          </svg>
        </div>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <g clip-path="url(#clip0_238_543)">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M1.59168 2.71245L2.38083 7.25004H7.25001C7.66422 7.25004 8.00001 7.58582 8.00001 8.00004C8.00001 8.41425 7.66422 8.75004 7.25001 8.75004H2.38083L1.59168 13.2876L13.9294 8.00004L1.59168 2.71245ZM0.988747 8.00004L0.0636748 2.68087C-0.0111098 2.25086 0.128032 1.81135 0.436661 1.50272C0.824446 1.11494 1.40926 1.00231 1.91333 1.21834L15.3157 6.9622C15.7308 7.14013 16 7.54835 16 8.00004C16 8.45172 15.7308 8.85995 15.3157 9.03788L1.91333 14.7817C1.40926 14.9978 0.824446 14.8851 0.436661 14.4974C0.128032 14.1887 -0.01111 13.7492 0.0636748 13.3192L0.988747 8.00004Z" fill="#8E8E93"/>
          </g>
          <defs>
          <clipPath id="clip0_238_543">
          <rect width="16" height="16" fill="white"/>
          </clipPath>
          </defs>
        </svg>
        </div>
      </div>
    </div>
  );
}

export default Footer;
