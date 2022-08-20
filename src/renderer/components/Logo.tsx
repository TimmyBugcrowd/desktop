// Copyright (c) 2016-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';

type Props = {
    width?: number;
    height?: number;
}

export default ({
    width = 170,
    height = 28,
}: Props) => (
    <svg
        width={width}
        height={height}
        viewBox='0 0 170 28'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
    >
        <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M65.0075 13.9089C65.0075 13.4847 64.9365 13.1397 64.7945 12.8741C64.6528 12.6092 64.4576 12.401 64.2094 12.2511C63.9611 12.1005 63.6551 11.9986 63.2917 11.9459C62.928 11.8928 62.5245 11.8663 62.0811 11.8663C61.1234 11.8663 60.1039 12.0518 59.0219 12.4232C58.7735 11.9633 58.5875 11.5299 58.4635 11.1233C58.3394 10.7166 58.277 10.2303 58.277 9.66408C59.0575 9.39887 59.8376 9.20436 60.6181 9.08058C61.3982 8.95679 62.1258 8.89472 62.7993 8.89472C64.6438 8.89472 66.0847 9.3368 67.1223 10.2215C68.1596 11.1058 68.6784 12.5204 68.6784 14.4659V22.4247C68.0576 22.6192 67.3039 22.805 66.4171 22.9819C65.5307 23.1588 64.5285 23.2473 63.4112 23.2473C62.5068 23.2473 61.6776 23.1676 60.9238 23.0083C60.1702 22.8493 59.5227 22.5837 58.9823 22.2124C58.4411 21.8413 58.0245 21.3637 57.7316 20.78C57.4393 20.1961 57.2929 19.48 57.2929 18.631C57.2929 17.7823 57.4746 17.0704 57.8382 16.4955C58.2017 15.9208 58.6718 15.4608 59.2479 15.116C59.8245 14.7711 60.4673 14.5236 61.1768 14.3731C61.8862 14.2227 62.5954 14.1476 63.3048 14.1476C63.8192 14.1476 64.3866 14.1744 65.0075 14.2271V13.9089ZM65.0075 16.6415C64.7945 16.6061 64.5641 16.5749 64.3155 16.5486C64.0672 16.5222 63.846 16.5089 63.6506 16.5089C62.7816 16.5089 62.0943 16.6634 61.5888 16.973C61.0835 17.2825 60.8308 17.7823 60.8308 18.4719C60.8308 18.932 60.9284 19.2854 61.1234 19.5333C61.3184 19.7807 61.5536 19.962 61.8284 20.0768C62.1033 20.1919 62.3956 20.2626 62.7061 20.2892C63.0168 20.3155 63.2871 20.3293 63.5173 20.3293C63.7836 20.3293 64.0497 20.3069 64.3155 20.2626C64.5818 20.2184 64.8122 20.1788 65.0075 20.1432V16.6415ZM71.1968 12.0783H69.4676L69.3343 11.5477L74.3091 5.20717H74.9209V9.21301H78.1397C78.1926 9.47857 78.2283 9.71716 78.2463 9.92929C78.2637 10.1418 78.2725 10.3627 78.2725 10.5928C78.2725 10.8402 78.2637 11.079 78.2463 11.3089C78.2283 11.5391 78.1926 11.7955 78.1397 12.0783H74.9209V17.464C74.9209 18.012 74.9655 18.4541 75.0542 18.7904C75.1425 19.126 75.2712 19.3915 75.4395 19.5862C75.6084 19.7807 75.8165 19.9133 76.0648 19.984C76.313 20.0551 76.606 20.0903 76.9425 20.0903C77.2088 20.0903 77.4701 20.0681 77.7275 20.0238C77.9845 19.9798 78.2106 19.9399 78.4056 19.9046C78.5301 20.2402 78.6183 20.5897 78.6717 20.9524C78.7251 21.315 78.7515 21.638 78.7515 21.9209C78.7515 22.1154 78.7472 22.2788 78.7382 22.4116C78.7294 22.5441 78.7163 22.6728 78.6983 22.7962C77.8826 22.9911 77.0404 23.0879 76.1714 23.0879C74.5574 23.0879 73.3246 22.7123 72.4736 21.9609C71.6224 21.209 71.1968 19.984 71.1968 18.2862V12.0783ZM81.1772 12.0783H79.4483L79.315 11.5477L84.2897 5.20717H84.9015V9.21301H88.1203C88.1733 9.47857 88.209 9.71716 88.2269 9.92929C88.2442 10.1418 88.2532 10.3627 88.2532 10.5928C88.2532 10.8402 88.2442 11.079 88.2269 11.3089C88.209 11.5391 88.1733 11.7955 88.1203 12.0783H84.9015V17.464C84.9015 18.012 84.9462 18.4541 85.0346 18.7904C85.1234 19.126 85.2519 19.3915 85.4203 19.5862C85.5889 19.7807 85.7969 19.9133 86.0455 19.984C86.2936 20.0551 86.5865 20.0903 86.923 20.0903C87.1891 20.0903 87.4507 20.0681 87.7081 20.0238C87.9652 19.9798 88.1913 19.9399 88.3864 19.9046C88.5105 20.2402 88.5991 20.5897 88.6521 20.9524C88.7057 21.315 88.7322 21.638 88.7322 21.9209C88.7322 22.1154 88.7278 22.2788 88.7188 22.4116C88.7101 22.5441 88.6969 22.6728 88.679 22.7962C87.8632 22.9911 87.0212 23.0879 86.1518 23.0879C84.5381 23.0879 83.3054 22.7123 82.4542 21.9609C81.603 21.209 81.1772 19.984 81.1772 18.2862V12.0783ZM98.6512 14.599C98.6159 13.7496 98.3807 13.0645 97.9463 12.5428C97.5118 12.021 96.9045 11.7598 96.124 11.7598C95.2373 11.7598 94.5634 12.0076 94.1023 12.5027C93.6413 12.9981 93.3665 13.6967 93.2779 14.599H98.6512ZM93.2511 17.225C93.3222 18.2862 93.6945 19.0556 94.3684 19.5333C95.0422 20.0108 95.929 20.2496 97.0288 20.2496C97.6317 20.2496 98.2476 20.1919 98.8774 20.0768C99.507 19.962 100.105 19.7983 100.673 19.5862C100.868 19.9399 101.036 20.3644 101.178 20.8597C101.32 21.3545 101.4 21.8854 101.418 22.4513C100.034 22.9819 98.4737 23.2473 96.7356 23.2473C95.459 23.2473 94.3641 23.0704 93.4504 22.7165C92.5373 22.3629 91.7923 21.8719 91.2161 21.2444C90.6397 20.6165 90.2139 19.8692 89.9391 19.0023C89.6644 18.1358 89.5271 17.1898 89.5271 16.1642C89.5271 15.1559 89.6688 14.2097 89.9526 13.3253C90.236 12.4407 90.6574 11.6717 91.2161 11.0174C91.7747 10.3627 92.4662 9.84552 93.291 9.46517C94.1157 9.08498 95.0778 8.89472 96.1772 8.89472C97.1349 8.89472 97.9862 9.06277 98.731 9.39887C99.4759 9.73479 100.11 10.1948 100.633 10.7787C101.156 11.3619 101.551 12.0564 101.817 12.8611C102.083 13.6657 102.216 14.5281 102.216 15.4476C102.216 15.7837 102.203 16.1155 102.176 16.4425C102.15 16.7694 102.118 17.0305 102.083 17.225H93.2511ZM103.659 9.21301C103.925 9.16028 104.177 9.12026 104.417 9.09397C104.656 9.06701 104.918 9.05395 105.202 9.05395C105.468 9.05395 105.729 9.07193 105.986 9.10686C106.243 9.1423 106.496 9.18673 106.744 9.23981C106.798 9.32832 106.846 9.45635 106.891 9.6244C106.935 9.79245 106.975 9.96931 107.01 10.1552C107.046 10.3408 107.077 10.5262 107.103 10.7122C107.13 10.8981 107.152 11.0522 107.17 11.1767C107.56 10.6281 108.039 10.1372 108.606 9.7041C109.174 9.27067 109.883 9.05395 110.734 9.05395C110.912 9.05395 111.116 9.06277 111.346 9.08058C111.577 9.09821 111.745 9.12467 111.852 9.16028C111.887 9.3368 111.914 9.54029 111.931 9.77023C111.95 10.0002 111.958 10.2389 111.958 10.4867C111.958 10.7873 111.945 11.1144 111.918 11.4682C111.892 11.8219 111.843 12.1578 111.772 12.4763C111.577 12.4407 111.36 12.4232 111.12 12.4232C110.881 12.4232 110.734 12.4232 110.682 12.4232C110.38 12.4232 110.043 12.4542 109.67 12.516C109.298 12.578 108.943 12.7415 108.606 13.0071C108.269 13.2723 107.99 13.6703 107.768 14.201C107.547 14.7313 107.436 15.4742 107.436 16.4294V22.9556C107.117 23.0083 106.798 23.0438 106.478 23.0614C106.159 23.0792 105.849 23.0879 105.547 23.0879C105.246 23.0879 104.94 23.0792 104.629 23.0614C104.319 23.0438 103.995 23.0083 103.659 22.9556V9.21301ZM113.729 9.21301C113.977 9.16028 114.226 9.12026 114.474 9.09397C114.722 9.06701 114.997 9.05395 115.299 9.05395C115.6 9.05395 115.866 9.06701 116.097 9.09397C116.327 9.12026 116.566 9.16028 116.815 9.21301C116.868 9.30153 116.917 9.4299 116.961 9.59795C117.005 9.76582 117.045 9.94303 117.081 10.1284C117.116 10.3142 117.147 10.4953 117.174 10.6722C117.201 10.8491 117.223 10.9995 117.241 11.1233C117.382 10.8582 117.569 10.5928 117.799 10.3273C118.03 10.0624 118.304 9.82382 118.624 9.61117C118.943 9.39887 119.302 9.22641 119.701 9.09397C120.1 8.96103 120.548 8.89472 121.045 8.89472C123.19 8.89472 124.565 9.70851 125.168 11.3357C125.522 10.6812 126.023 10.1111 126.67 9.6244C127.318 9.13789 128.138 8.89472 129.132 8.89472C130.692 8.89472 131.84 9.32408 132.576 10.1818C133.312 11.0393 133.68 12.3791 133.68 14.201V22.929C133.042 23.0351 132.412 23.0879 131.792 23.0879C131.171 23.0879 130.541 23.0351 129.903 22.929V15.1822C129.903 14.2271 129.783 13.4934 129.543 12.9806C129.304 12.4676 128.821 12.2111 128.094 12.2111C127.792 12.2111 127.496 12.2555 127.203 12.3437C126.91 12.4319 126.644 12.5955 126.405 12.8344C126.165 13.0732 125.97 13.4095 125.819 13.8427C125.669 14.2756 125.593 14.8376 125.593 15.5273V22.929C124.955 23.0351 124.325 23.0879 123.705 23.0879C123.084 23.0879 122.454 23.0351 121.816 22.929V15.1822C121.816 14.2271 121.696 13.4934 121.457 12.9806C121.217 12.4676 120.734 12.2111 120.007 12.2111C119.706 12.2111 119.404 12.2555 119.102 12.3437C118.801 12.4319 118.531 12.6045 118.291 12.8611C118.052 13.1173 117.861 13.4754 117.719 13.9355C117.577 14.3952 117.506 14.9967 117.506 15.7394V22.929C116.868 23.0351 116.239 23.0879 115.618 23.0879C114.997 23.0879 114.368 23.0351 113.729 22.929V9.21301ZM141.373 20.382C142.367 20.382 143.08 20.0152 143.515 19.2809C143.949 18.5472 144.167 17.4902 144.167 16.1109C144.167 14.7313 143.949 13.6747 143.515 12.9406C143.08 12.2063 142.367 11.8395 141.373 11.8395C140.398 11.8395 139.693 12.2063 139.259 12.9406C138.824 13.6747 138.607 14.7313 138.607 16.1109C138.607 17.4902 138.824 18.5472 139.259 19.2809C139.693 20.0152 140.398 20.382 141.373 20.382ZM141.373 23.2473C140.256 23.2473 139.285 23.0658 138.461 22.7033C137.636 22.3409 136.953 21.8368 136.412 21.191C135.871 20.5455 135.463 19.7895 135.189 18.9228C134.914 18.0561 134.776 17.1191 134.776 16.1109C134.776 15.1028 134.914 14.1564 135.189 13.2723C135.463 12.3879 135.871 11.623 136.412 10.9774C136.953 10.3317 137.636 9.82382 138.461 9.45194C139.285 9.08058 140.256 8.89472 141.373 8.89472C142.491 8.89472 143.466 9.08058 144.3 9.45194C145.133 9.82382 145.824 10.3317 146.375 10.9774C146.924 11.623 147.332 12.3879 147.598 13.2723C147.864 14.1564 147.997 15.1028 147.997 16.1109C147.997 17.1191 147.864 18.0561 147.598 18.9228C147.332 19.7895 146.924 20.5455 146.375 21.191C145.824 21.8368 145.133 22.3409 144.3 22.7033C143.466 23.0658 142.491 23.2473 141.373 23.2473ZM152.1 16.9598C151.107 16.6766 150.331 16.2568 149.773 15.6995C149.214 15.1427 148.935 14.3068 148.935 13.1924C148.935 11.8482 149.418 10.7963 150.385 10.0358C151.351 9.27508 152.668 8.89472 154.335 8.89472C155.027 8.89472 155.709 8.95679 156.383 9.08058C157.057 9.20436 157.74 9.38988 158.431 9.6378C158.396 10.0973 158.307 10.5749 158.165 11.0704C158.024 11.5653 157.855 11.9986 157.66 12.3705C157.234 12.1934 156.764 12.0386 156.25 11.9058C155.736 11.7734 155.195 11.7071 154.627 11.7071C154.024 11.7071 153.555 11.7999 153.217 11.9855C152.881 12.1714 152.712 12.4676 152.712 12.8741C152.712 13.2633 152.832 13.5375 153.071 13.6967C153.311 13.8558 153.652 14.0065 154.095 14.1476L155.612 14.599C156.108 14.7403 156.556 14.9126 156.955 15.116C157.354 15.3195 157.696 15.5715 157.979 15.872C158.263 16.1727 158.485 16.5442 158.644 16.9863C158.804 17.4285 158.884 17.9678 158.884 18.6043C158.884 19.2591 158.746 19.8692 158.471 20.4351C158.197 21.0011 157.797 21.4918 157.274 21.9073C156.751 22.3233 156.117 22.6504 155.372 22.889C154.627 23.1279 153.785 23.2473 152.845 23.2473C152.419 23.2473 152.03 23.2339 151.675 23.2074C151.32 23.1806 150.979 23.1365 150.651 23.0748C150.323 23.0128 149.999 22.9378 149.68 22.8493C149.36 22.7609 149.014 22.646 148.642 22.5044C148.678 22.0267 148.762 21.5448 148.895 21.0586C149.028 20.5724 149.201 20.099 149.414 19.6391C149.999 19.8692 150.553 20.0415 151.076 20.1565C151.6 20.2716 152.145 20.3293 152.712 20.3293C152.961 20.3293 153.231 20.3069 153.523 20.2626C153.816 20.2184 154.087 20.1388 154.335 20.0238C154.583 19.9089 154.792 19.7585 154.96 19.573C155.129 19.3873 155.212 19.1441 155.212 18.8431C155.212 18.419 155.084 18.1138 154.827 17.9281C154.57 17.7426 154.211 17.5784 153.75 17.4372L152.1 16.9598ZM161.301 12.0783H159.572L159.439 11.5477L164.414 5.20717H165.025V9.21301H168.244C168.297 9.47857 168.333 9.71716 168.351 9.92929C168.368 10.1418 168.377 10.3627 168.377 10.5928C168.377 10.8402 168.368 11.079 168.351 11.3089C168.333 11.5391 168.297 11.7955 168.244 12.0783H165.025V17.464C165.025 18.012 165.07 18.4541 165.158 18.7904C165.247 19.126 165.376 19.3915 165.544 19.5862C165.713 19.7807 165.921 19.9133 166.169 19.984C166.417 20.0551 166.711 20.0903 167.047 20.0903C167.313 20.0903 167.575 20.0681 167.832 20.0238C168.089 19.9798 168.315 19.9399 168.51 19.9046C168.634 20.2402 168.723 20.5897 168.776 20.9524C168.83 21.315 168.856 21.638 168.856 21.9209C168.856 22.1154 168.852 22.2788 168.843 22.4116C168.834 22.5441 168.821 22.6728 168.803 22.7962C167.987 22.9911 167.145 23.0879 166.276 23.0879C164.662 23.0879 163.429 22.7123 162.578 21.9609C161.727 21.209 161.301 19.984 161.301 18.2862V12.0783ZM36.6467 5.01352C37.4154 4.90686 38.1549 4.85327 38.8656 4.85327C39.615 4.85327 40.3548 4.90686 41.0848 5.01352L45.8398 14.8561L50.7388 5.01352C51.3345 4.90686 51.9969 4.85327 52.7272 4.85327C53.4574 4.85327 54.1583 4.90686 54.8309 5.01352L55.8107 23.0872C55.0809 23.194 54.3892 23.2473 53.7361 23.2473C53.0824 23.2473 52.4392 23.194 51.8053 23.0872L51.2864 10.0197L47.0788 19.0513C46.8097 19.087 46.5313 19.1185 46.2429 19.1448C45.9547 19.1716 45.6669 19.1848 45.3785 19.1848C45.1285 19.1848 44.8791 19.176 44.6295 19.1582C44.3797 19.1404 44.1204 19.1046 43.8512 19.0513L39.9321 9.83247L39.5286 23.0872C38.9139 23.194 38.3183 23.2473 37.7417 23.2473C37.1268 23.2473 36.4926 23.194 35.8398 23.0872L36.6467 5.01352Z'
            fill='white'
        />
        <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M18.7948 11.4403C18.7948 11.4403 18.8382 13.3508 17.5134 14.6487C16.1884 15.9466 14.5611 15.828 13.5025 15.4695C12.4437 15.1111 11.079 14.2168 10.8149 12.3811C10.5508 10.5453 11.7458 9.05398 11.7458 9.05398L14.3497 5.81577L15.8663 3.96632L17.1681 2.35463C17.1681 2.35463 17.7655 1.55441 17.9358 1.38925C17.9695 1.35653 18.0041 1.33505 18.038 1.31852L18.0627 1.30591L18.0672 1.3042C18.1388 1.27335 18.2213 1.26671 18.3009 1.29364C18.3787 1.32006 18.4391 1.37357 18.4773 1.43953L18.4853 1.45232L18.4923 1.46698C18.5108 1.50209 18.5263 1.54214 18.5337 1.59157C18.5684 1.82626 18.557 2.82488 18.557 2.82488L18.6121 4.89573L18.6934 7.28616L18.7948 11.4403ZM22.1655 2.67214C26.9815 6.17725 29.1903 12.5383 27.1819 18.4877C24.7101 25.8095 16.7872 29.7357 9.48576 27.2572C2.18429 24.7785 -1.73091 16.8337 0.740758 9.51193C2.75249 3.55281 8.37502 -0.156665 14.3346 0.00508354L12.4243 2.26837C8.88883 2.90939 5.83622 5.33051 4.63642 8.88471C2.85125 14.1726 5.84335 19.9664 11.3195 21.8253C16.7956 23.6842 22.682 20.9045 24.4672 15.6166C25.6631 12.0742 24.7149 8.30504 22.3125 5.6436L22.1655 2.67214Z'
            fill='white'
        />
    </svg>
);