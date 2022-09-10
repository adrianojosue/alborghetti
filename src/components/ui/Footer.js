import { NavLink } from "react-router-dom"

export const Footer = () => {
  return (
    <footer>

      <div className="footer_logo">
        <svg width="315" height="120" viewBox="0 0 315 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M23.6556 0C18.1086 0.0585563 13.6302 4.51735 13.6305 10.0139C14.033 14.6651 15.2111 17.2638 18.741 21.8853C15.6261 19.7655 13.7789 19.0045 10.2018 18.7903C4.60199 18.7903 0.0645643 23.2712 0.0642702 28.8045C0.0642702 34.3367 4.60189 38.8193 10.2013 38.8193C15.6654 38.5183 20.3706 37.219 23.6557 32.8831C23.5138 39.7096 18.1528 44.7847 14.6205 46.9643H12.4896C3.51558 46.9643 0 52.8853 0 58.9913C0 64.5422 3.51558 69.168 7.86379 69.168C10.1767 69.168 12.027 67.3177 12.027 65.0048C12.027 62.6919 10.1767 60.8416 7.86379 60.8416C5.55091 60.8416 3.70061 62.6919 3.70061 65.3749C1.8503 63.9872 0.925149 61.3042 0.925149 58.9913C0.925149 55.9383 3.33055 54.3656 8.78895 54.3656H17.8554L24.609 64.3572C24.609 64.3572 29.1423 71.0183 34.3232 71.0183H37.4687C43.0196 71.0183 47.1828 65.93 47.1828 60.5641C47.1828 56.771 45.1474 54.9207 43.2046 54.088C45.5175 53.2554 47.1828 51.035 47.1828 48.3521C47.1828 45.0215 44.4998 42.3386 41.1693 42.3386V43.2637C42.9271 43.2637 44.3148 44.0964 44.3148 45.114C44.3148 46.1317 42.9271 46.9643 41.1693 46.9643H32.691C29.1589 44.7847 23.7976 39.7098 23.6557 32.8831C26.9407 37.219 31.6457 38.5182 37.1097 38.8192C42.7094 38.8192 47.247 34.3366 47.247 28.8044C47.247 23.2711 42.7093 18.7902 37.1097 18.7902C33.5326 19.0044 31.6854 19.7654 28.5705 21.8852C32.1004 17.2637 33.2787 14.665 33.6812 10.0138C33.6812 4.51735 29.2031 0.0584606 23.6556 0ZM46.2576 59.9165C46.2576 57.6036 44.2223 54.6431 41.0768 54.3656H19.1507L23.7764 61.0267C25.0716 62.9695 28.1246 63.6171 34.3232 63.6171H41.1693C43.2046 63.6171 46.2576 62.877 46.2576 59.9165Z" fill="none"/>
          <path d="M51.0208 6.75741V5.83101H62.1377V69.7531H65.8434V70.6795H51.0208V69.7531H54.7265V6.75741H51.0208Z" fill="none"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M86.8026 71.1427C83.4675 71.1427 81.5221 69.7531 80.3177 67.715V70.6795H69.2009V69.7531H72.9065V6.75741H69.2009V5.83101H80.3177V27.3237C81.5221 25.2856 83.4675 23.896 86.8026 23.896C91.8979 23.896 96.9931 27.3237 96.9931 33.6232V61.4155C96.9931 67.715 91.8979 71.1427 86.8026 71.1427ZM85.8762 24.8224C83.2823 24.8224 80.3177 27.3237 80.3177 30.844V64.1947C80.3177 67.715 83.2823 70.2163 85.8762 70.2163C87.9143 70.2163 89.5818 68.5488 89.5818 65.5843V29.4544C89.5818 26.4899 87.9143 24.8224 85.8762 24.8224Z" fill="none"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M104.534 58.6362C104.534 67.4371 110.463 71.1427 116.577 71.1427C122.691 71.1427 128.62 67.4371 128.62 58.6362V36.4025C128.62 27.6016 122.691 23.896 116.577 23.896C110.463 23.896 104.534 27.6016 104.534 36.4025V58.6362ZM121.209 58.6362C121.209 66.8813 119.634 70.2163 116.577 70.2163C113.52 70.2163 111.945 66.8813 111.945 58.6362V36.4025C111.945 28.1574 113.52 24.8224 116.577 24.8224C119.634 24.8224 121.209 28.1574 121.209 36.4025V58.6362Z" fill="none"/>
          <path d="M154.268 34.0864C151.951 34.0864 150.099 32.2336 150.099 29.9176C150.099 27.6942 151.859 25.8414 154.082 25.7488C153.341 25.1003 152.229 24.8224 151.025 24.8224C148.061 24.8224 145.467 27.231 145.467 30.844V69.7531H149.172V70.6795H134.35V69.7531H138.055V25.2856H134.35V24.3592H145.467V27.231C146.486 25.3782 148.431 23.896 151.859 23.896C155.194 23.896 158.436 26.1193 158.436 29.9176C158.436 32.2336 156.584 34.0864 154.268 34.0864Z" fill="none"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M183.455 74.8484C183.455 80.3142 180.398 84.1124 176.044 84.1124C171.69 84.1124 168.633 80.3142 168.633 74.8484C168.633 69.3826 171.69 65.5843 176.044 65.5843V64.6579C167.891 64.6579 161.221 69.1973 161.221 74.8484C161.221 80.4995 167.891 85.0388 176.044 85.0388C184.196 85.0388 190.866 80.5921 190.866 72.9956V61.8787H173.265C172.246 61.8787 170.485 61.1375 170.485 58.173C170.485 55.2085 172.246 54.4674 173.265 54.4674H175.117C181.417 54.4674 187.161 51.3176 187.161 41.9609V36.4025C187.161 32.2336 186.142 29.7323 184.567 27.6942C185.308 27.0457 186.049 26.4899 187.068 26.1193C187.068 28.2501 188.272 29.4544 189.847 29.4544C191.422 29.4544 192.627 28.2501 192.627 26.6752C192.627 25.1003 191.422 23.896 189.847 23.896C187.161 23.896 185.03 25.1929 183.733 26.7678C181.788 24.8224 178.267 23.896 175.117 23.896C169.003 23.896 163.074 27.0457 163.074 36.4025V41.9609C163.074 48.909 167.521 52.0587 171.227 53.6336C167.706 53.9116 163.074 55.4865 163.074 58.173C163.074 61.1375 167.336 62.8051 171.412 62.8051H183.455V74.8484ZM179.75 41.9609C179.75 50.5765 178.175 53.541 175.117 53.541C172.06 53.541 170.485 50.5765 170.485 41.9609V36.4025C170.485 27.7869 172.06 24.8224 175.117 24.8224C178.175 24.8224 179.75 27.7869 179.75 36.4025V41.9609Z" fill="none"/>
          <path d="M212.081 69.7531H215.787V29.4544C215.787 26.4899 214.119 24.8224 212.081 24.8224C209.487 24.8224 206.523 27.3237 206.523 30.844V69.7531H210.228V70.6795H195.406V69.7531H199.111V6.75741H195.406V5.83101H206.523V27.3237C207.727 25.2856 209.672 23.896 213.008 23.896C218.103 23.896 223.198 27.3237 223.198 33.6232V69.7531H226.904V70.6795H212.081V69.7531Z" fill="none"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M239.417 47.1488H256.092V36.4025C256.092 27.6016 250.163 23.896 244.049 23.896C237.934 23.896 232.005 27.6016 232.005 36.4025V58.6362C232.005 67.4371 237.934 71.1427 244.049 71.1427C250.719 71.1427 255.166 66.9739 255.166 58.6362V56.5055H254.239V58.6362C254.239 67.5297 248.681 70.2163 244.975 70.2163C241.918 70.2163 239.417 67.8077 239.417 62.3419V47.1488ZM239.417 36.4025C239.417 28.1574 240.992 24.8224 244.049 24.8224C247.106 24.8224 248.681 28.1574 248.681 36.4025V46.2224H239.417V36.4025Z" fill="none"/>
          <path d="M273.97 68.2709C274.989 68.2709 275.823 66.8813 275.823 65.1211H276.749C276.749 68.4561 274.063 71.1427 270.728 71.1427C267.393 71.1427 264.706 68.4561 264.706 65.1211V25.2856H260.074V24.3592H264.706V18.1522L272.117 13.2423V24.3592H277.676V25.2856H272.117V65.1211C272.117 66.8813 272.951 68.2709 273.97 68.2709Z" fill="none"/>
          <path d="M295.003 65.1211C295.003 66.8813 294.169 68.2709 293.15 68.2709C292.131 68.2709 291.297 66.8813 291.297 65.1211V25.2856H296.855V24.3592H291.297V13.2423L283.886 18.1522V24.3592H279.254V25.2856H283.886V65.1211C283.886 68.4561 286.572 71.1427 289.907 71.1427C293.242 71.1427 295.929 68.4561 295.929 65.1211H295.003Z" fill="none"/>
          <path d="M303.528 69.7531H299.823V70.6795H314.645V69.7531H310.94V24.3592H299.823V25.2856H303.528V69.7531Z" fill="none"/>
          <path d="M307.234 17.8743C304.64 17.8743 302.602 15.8362 302.602 13.2423C302.602 10.6483 304.64 8.61023 307.234 8.61023C309.828 8.61023 311.866 10.6483 311.866 13.2423C311.866 15.8362 309.828 17.8743 307.234 17.8743Z" fill="none"/>
          <path d="M93.563 95.3189V111.502H106.107V113.97H90.7895V95.3189H93.563Z" fill="none"/>
          <path d="M108.644 101.069C109.136 100.781 109.526 100.476 109.814 100.153C110.103 99.8141 110.247 99.3985 110.247 98.9066C110.247 98.7879 110.238 98.6945 110.221 98.6267H108.211V95.0136H112.206C112.257 95.6752 112.282 96.3706 112.282 97.1C112.282 97.8973 112.223 98.5758 112.104 99.1356C112.003 99.6954 111.782 100.238 111.443 100.764C111.104 101.273 110.595 101.765 109.916 102.24L108.644 101.069Z" fill="none"/>
          <path d="M117.514 107.99C117.633 109.144 117.998 110.094 118.609 110.84C119.219 111.586 120.101 111.96 121.255 111.96C122.137 111.96 122.824 111.781 123.316 111.425C123.808 111.069 124.249 110.458 124.639 109.593L127.183 110.407C126.759 111.544 126.064 112.477 125.097 113.206C124.13 113.936 122.849 114.3 121.255 114.3C119.609 114.3 118.312 113.919 117.362 113.155C116.412 112.375 115.75 111.459 115.377 110.407C115.021 109.339 114.843 108.304 114.843 107.303C114.843 106.302 115.021 105.276 115.377 104.224C115.75 103.156 116.412 102.24 117.362 101.476C118.312 100.696 119.609 100.306 121.255 100.306C122.9 100.306 124.198 100.696 125.148 101.476C126.115 102.24 126.776 103.156 127.132 104.224C127.506 105.276 127.692 106.302 127.692 107.303C127.692 107.592 127.684 107.821 127.667 107.99H117.514ZM121.255 102.647C120.237 102.647 119.423 102.944 118.812 103.537C118.218 104.131 117.828 104.903 117.642 105.853H124.893C124.707 104.903 124.308 104.131 123.697 103.537C123.104 102.944 122.29 102.647 121.255 102.647Z" fill="none"/>
          <path d="M133.69 113.97H130.968V95.3189H133.69V113.97Z" fill="none"/>
          <path d="M139.803 107.99C139.922 109.144 140.287 110.094 140.897 110.84C141.508 111.586 142.39 111.96 143.543 111.96C144.426 111.96 145.113 111.781 145.604 111.425C146.096 111.069 146.537 110.458 146.928 109.593L149.472 110.407C149.048 111.544 148.352 112.477 147.386 113.206C146.419 113.936 145.138 114.3 143.543 114.3C141.898 114.3 140.6 113.919 139.65 113.155C138.701 112.375 138.039 111.459 137.666 110.407C137.31 109.339 137.132 108.304 137.132 107.303C137.132 106.302 137.31 105.276 137.666 104.224C138.039 103.156 138.701 102.24 139.65 101.476C140.6 100.696 141.898 100.306 143.543 100.306C145.189 100.306 146.487 100.696 147.436 101.476C148.403 102.24 149.065 103.156 149.421 104.224C149.794 105.276 149.981 106.302 149.981 107.303C149.981 107.592 149.972 107.821 149.955 107.99H139.803ZM143.543 102.647C142.526 102.647 141.712 102.944 141.101 103.537C140.507 104.131 140.117 104.903 139.93 105.853H147.182C146.995 104.903 146.597 104.131 145.986 103.537C145.392 102.944 144.578 102.647 143.543 102.647Z" fill="none"/>
          <path d="M164.579 100.891C163.867 100.891 163.29 101.188 162.849 101.782C163.731 102.579 164.172 103.656 164.172 105.013C164.172 106.218 163.85 107.168 163.205 107.863C162.577 108.559 161.831 109.042 160.966 109.313C160.101 109.585 159.261 109.72 158.447 109.72C157.751 109.72 157.098 109.644 156.488 109.491C156.098 109.627 155.784 109.797 155.546 110C155.309 110.187 155.19 110.374 155.19 110.56C155.19 110.696 155.241 110.815 155.343 110.916C155.478 111.069 155.784 111.188 156.259 111.273C156.751 111.34 157.438 111.417 158.32 111.502C159.982 111.637 161.195 111.79 161.958 111.96C163.146 112.214 164.079 112.647 164.757 113.257C165.436 113.868 165.775 114.767 165.775 115.954C165.775 117.244 165.198 118.236 164.045 118.931C162.891 119.644 161.237 120 159.083 120C156.827 120 155.122 119.712 153.969 119.135C152.815 118.575 152.239 117.651 152.239 116.361C152.239 115.055 152.985 114.029 154.478 113.283C153.85 113.062 153.4 112.782 153.129 112.443C152.875 112.104 152.747 111.705 152.747 111.247C152.747 110.789 152.926 110.357 153.282 109.949C153.655 109.525 154.155 109.144 154.783 108.804C153.392 107.99 152.697 106.727 152.697 105.013C152.697 103.809 153.01 102.859 153.638 102.163C154.283 101.468 155.037 100.985 155.903 100.713C156.785 100.442 157.633 100.306 158.447 100.306C159.312 100.306 160.143 100.442 160.94 100.713C161.84 99.2543 163.018 98.5249 164.477 98.5249C164.986 98.5249 165.52 98.6267 166.08 98.8303V101.375C165.928 101.239 165.707 101.129 165.419 101.044C165.147 100.942 164.867 100.891 164.579 100.891ZM158.447 107.609C159.312 107.609 160.041 107.397 160.635 106.972C161.246 106.548 161.551 105.895 161.551 105.013C161.551 104.131 161.246 103.478 160.635 103.054C160.041 102.613 159.312 102.392 158.447 102.392C157.582 102.392 156.852 102.613 156.259 103.054C155.665 103.478 155.368 104.131 155.368 105.013C155.368 105.895 155.665 106.548 156.259 106.972C156.852 107.397 157.582 107.609 158.447 107.609ZM159.516 113.995C159.397 113.978 159.134 113.953 158.727 113.919C158.337 113.885 157.828 113.842 157.2 113.792C156.318 113.944 155.69 114.224 155.317 114.631C154.961 115.038 154.783 115.462 154.783 115.903C154.783 116.226 154.936 116.531 155.241 116.819C155.563 117.125 156.047 117.371 156.691 117.557C157.353 117.761 158.159 117.863 159.109 117.863C160.347 117.863 161.314 117.676 162.009 117.303C162.705 116.947 163.052 116.455 163.052 115.827C163.052 115.233 162.764 114.809 162.187 114.555C161.611 114.3 160.72 114.114 159.516 113.995Z" fill="none"/>
          <path d="M179.603 109.949C179.62 110.34 179.662 110.653 179.73 110.891C179.815 111.128 179.976 111.34 180.213 111.527C180.468 111.714 180.841 111.849 181.333 111.934L180.137 114.3C179.374 114.199 178.771 113.978 178.33 113.639C177.906 113.283 177.609 112.816 177.44 112.239C176.609 113.613 175.065 114.3 172.809 114.3C171.605 114.3 170.629 114.088 169.883 113.664C169.153 113.24 168.636 112.731 168.331 112.138C168.025 111.527 167.873 110.942 167.873 110.382C167.873 109.466 168.153 108.643 168.712 107.914C169.289 107.185 170.146 106.676 171.282 106.387C171.859 106.235 172.495 106.133 173.191 106.082C173.903 106.014 174.336 105.972 174.488 105.955C175.591 105.887 176.456 105.785 177.084 105.649C177.05 104.75 176.829 104.021 176.422 103.461C176.032 102.884 175.302 102.596 174.234 102.596C173.521 102.596 172.851 102.766 172.224 103.105C171.613 103.427 171.189 104.004 170.951 104.835L168.382 104.097C168.721 102.978 169.374 102.079 170.341 101.4C171.308 100.705 172.597 100.357 174.208 100.357C175.667 100.357 176.905 100.739 177.923 101.502C178.941 102.248 179.484 103.334 179.552 104.759C179.569 105.437 179.577 106.345 179.577 107.481C179.594 108.618 179.603 109.441 179.603 109.949ZM177.134 107.787H177.084L177.134 107.812V107.787ZM173.241 112.112C173.75 112.112 174.293 111.985 174.87 111.731C175.447 111.476 175.956 111.027 176.397 110.382C176.838 109.737 177.058 108.872 177.058 107.787C176.719 107.838 176.193 107.897 175.481 107.965C174.412 108.05 173.53 108.16 172.834 108.296C172.139 108.414 171.545 108.635 171.053 108.957C170.561 109.279 170.315 109.729 170.315 110.306C170.315 111.001 170.621 111.476 171.231 111.731C171.842 111.985 172.512 112.112 173.241 112.112Z" fill="none"/>
          <path d="M190.807 100.306C192.079 100.306 193.258 100.679 194.344 101.426C195.429 102.155 195.972 103.504 195.972 105.471V113.97H193.25V105.904C193.199 104.937 192.927 104.174 192.435 103.614C191.961 103.054 191.341 102.774 190.578 102.774C190.035 102.774 189.492 102.927 188.95 103.232C188.424 103.521 187.974 103.97 187.601 104.581C187.228 105.174 187.007 105.921 186.939 106.82V113.97H184.217V100.637H186.939V102.392C187.397 101.748 187.991 101.239 188.721 100.866C189.45 100.493 190.145 100.306 190.807 100.306Z" fill="none"/>
          <path d="M199.302 100.637H209.913V102.927L201.872 111.654H209.913V113.97H198.666V111.654L206.681 102.927H199.302V100.637Z" fill="none"/>
          <path d="M223.683 109.949C223.7 110.34 223.742 110.653 223.81 110.891C223.895 111.128 224.056 111.34 224.294 111.527C224.548 111.714 224.921 111.849 225.413 111.934L224.217 114.3C223.454 114.199 222.852 113.978 222.411 113.639C221.987 113.283 221.69 112.816 221.52 112.239C220.689 113.613 219.145 114.3 216.889 114.3C215.685 114.3 214.71 114.088 213.963 113.664C213.234 113.24 212.716 112.731 212.411 112.138C212.106 111.527 211.953 110.942 211.953 110.382C211.953 109.466 212.233 108.643 212.793 107.914C213.37 107.185 214.226 106.676 215.363 106.387C215.939 106.235 216.576 106.133 217.271 106.082C217.983 106.014 218.416 105.972 218.569 105.955C219.671 105.887 220.536 105.785 221.164 105.649C221.13 104.75 220.91 104.021 220.502 103.461C220.112 102.884 219.383 102.596 218.314 102.596C217.602 102.596 216.932 102.766 216.304 103.105C215.693 103.427 215.269 104.004 215.032 104.835L212.462 104.097C212.801 102.978 213.454 102.079 214.421 101.4C215.388 100.705 216.677 100.357 218.289 100.357C219.748 100.357 220.986 100.739 222.004 101.502C223.021 102.248 223.564 103.334 223.632 104.759C223.649 105.437 223.658 106.345 223.658 107.481C223.674 108.618 223.683 109.441 223.683 109.949ZM221.215 107.787H221.164L221.215 107.812V107.787ZM217.322 112.112C217.831 112.112 218.374 111.985 218.95 111.731C219.527 111.476 220.036 111.027 220.477 110.382C220.918 109.737 221.139 108.872 221.139 107.787C220.799 107.838 220.273 107.897 219.561 107.965C218.492 108.05 217.61 108.16 216.915 108.296C216.219 108.414 215.626 108.635 215.134 108.957C214.642 109.279 214.396 109.729 214.396 110.306C214.396 111.001 214.701 111.476 215.312 111.731C215.922 111.985 216.592 112.112 217.322 112.112Z" fill="none"/>
        </svg>
      </div>

      <div className="footer_social-navbar">
        <a href="https://www.twitter.com/" rel="noreferrer" target="_blank">
          <svg width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M35.3498 7.96632C35.3738 8.3135 35.3738 8.66067 35.3738 9.01105C35.3738 19.6872 27.2463 32 12.3848 32V31.9936C7.9947 32 3.69577 30.7425 0 28.3714C0.63836 28.4482 1.27992 28.4866 1.92308 28.4882C5.56125 28.4914 9.09543 27.2707 11.9576 25.0228C8.50026 24.9572 5.46845 22.703 4.40932 19.412C5.62045 19.6456 6.86837 19.5976 8.05709 19.2728C4.28773 18.5113 1.5759 15.1995 1.5759 11.3533C1.5759 11.3181 1.5759 11.2845 1.5759 11.2509C2.69903 11.8765 3.95655 12.2236 5.24287 12.262C1.69269 9.8894 0.598362 5.16649 2.74223 1.47393C6.84437 6.52161 12.8968 9.59022 19.394 9.91499C18.7428 7.10877 19.6324 4.16816 21.7314 2.19548C24.9856 -0.863526 30.1037 -0.706736 33.1627 2.54586C34.9722 2.18908 36.7065 1.52512 38.2936 0.584383C37.6904 2.45467 36.4281 4.04337 34.7418 5.0529C36.3433 4.86411 37.908 4.43534 39.3815 3.78098C38.2968 5.40648 36.9305 6.82239 35.3498 7.96632Z" fill="none"/>
          </svg>
        </a>
        <a href="https://www.facebook.com/" rel="noreferrer" target="_blank">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 16C0 23.9111 5.77778 30.4889 13.3333 31.8222L13.4225 31.7509C13.3927 31.7452 13.363 31.7393 13.3332 31.7334V20.4445H9.3332V16H13.3332V12.4445C13.3332 8.44449 15.911 6.22227 19.5554 6.22227C20.711 6.22227 21.9554 6.40004 23.111 6.57782V10.6667H21.0665C19.111 10.6667 18.6665 11.6445 18.6665 12.8889V16H22.9332L22.2221 20.4445H18.6665V31.7334C18.6369 31.7393 18.6072 31.7452 18.5775 31.7509L18.6667 31.8222C26.2222 30.4889 32 23.9111 32 16C32 7.2 24.8 0 16 0C7.2 0 0 7.2 0 16Z" fill="none"/>
          </svg>
        </a>
        <a href="https://www.instagram.com/" rel="noreferrer" target="_blank">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.0004 0.0125323C11.6536 0.0125323 11.1069 0.0325328 9.40024 0.105868C7.70019 0.18587 6.5335 0.45921 5.52014 0.852553C4.45256 1.25466 3.4856 1.88489 2.68673 2.69927C1.87236 3.49813 1.24212 4.4651 0.840021 5.53267C0.440011 6.54603 0.173338 7.71273 0.0933357 9.41277C0.0200005 11.1195 0 11.6662 0 16.0129C0 20.3464 0.0200005 20.8997 0.0933357 22.5998C0.173338 24.3065 0.446678 25.4665 0.840021 26.4865C1.24212 27.5541 1.87236 28.5211 2.68673 29.3199C3.4856 30.1343 4.45256 30.7645 5.52014 31.1666C6.5335 31.56 7.70019 31.8333 9.40024 31.9067C11.1069 31.9867 11.6536 32 16.0004 32C20.3338 32 20.8872 31.9867 22.5872 31.9067C24.2939 31.8267 25.454 31.56 26.474 31.1666C27.5416 30.7645 28.5085 30.1343 29.3074 29.3199C30.1218 28.5211 30.752 27.5541 31.1541 26.4865C31.5475 25.4665 31.8208 24.3065 31.8941 22.5998C31.9741 20.8997 31.9875 20.353 31.9875 16.0063C31.9875 11.6662 31.9741 11.1195 31.8941 9.41277C31.8141 7.71273 31.5475 6.54603 31.1541 5.53267C30.752 4.4651 30.1218 3.49813 29.3074 2.69927C28.5085 1.88489 27.5416 1.25466 26.474 0.852553C25.454 0.452543 24.2939 0.18587 22.5872 0.105868C20.393 0.0110159 18.1965 -0.0201091 16.0004 0.0125323ZM16.0004 2.8926C20.2672 2.8926 20.7739 2.91261 22.4606 2.98594C24.0206 3.05928 24.8606 3.31928 25.4273 3.53929C26.174 3.82596 26.7073 4.17264 27.2674 4.73932C27.7992 5.2532 28.2092 5.87965 28.4674 6.5727C28.6807 7.13938 28.9474 7.98607 29.0141 9.5461C29.0941 11.2328 29.1074 11.7395 29.1074 16.0129C29.1074 20.2797 29.0941 20.7864 29.0141 22.4731C28.9474 24.0331 28.6807 24.8732 28.4674 25.4398C28.2101 26.1353 27.8 26.7641 27.2674 27.2799C26.7516 27.8126 26.1227 28.2227 25.4273 28.4799C24.8673 28.6933 24.0206 28.9599 22.4606 29.0266C20.7739 29.1066 20.2605 29.1199 15.9937 29.1199C11.727 29.1199 11.2203 29.1066 9.52691 29.0266C7.97353 28.9599 7.12685 28.6933 6.56016 28.4799C5.86473 28.2227 5.23592 27.8126 4.72012 27.2799C4.18743 26.7641 3.77734 26.1353 3.52009 25.4398C3.30675 24.8798 3.04674 24.0331 2.97341 22.4731C2.87949 20.3188 2.84837 18.1623 2.88007 16.0063C2.88007 11.7395 2.90007 11.2328 2.97341 9.53944C3.04674 7.98607 3.30675 7.13938 3.52676 6.5727C3.784 5.87726 4.1941 5.24845 4.72679 4.73265C5.24067 4.20079 5.86712 3.79075 6.56016 3.53262C7.12685 3.31928 7.97353 3.05928 9.53357 2.98594C11.2203 2.91261 11.727 2.8926 16.0004 2.8926ZM16.0004 7.79273C13.822 7.79273 11.7329 8.65808 10.1926 10.1984C8.65221 11.7388 7.78686 13.8279 7.78686 16.0063C7.78686 18.1846 8.65221 20.2738 10.1926 21.8141C11.7329 23.3545 13.822 24.2198 16.0004 24.2198C18.1788 24.2198 20.2679 23.3545 21.8083 21.8141C23.3486 20.2738 24.2139 18.1846 24.2139 16.0063C24.2139 13.8279 23.3486 11.7388 21.8083 10.1984C20.2679 8.65808 18.1788 7.79273 16.0004 7.79273ZM16.0004 21.3464C14.5859 21.3464 13.2293 20.7845 12.2291 19.7843C11.2289 18.784 10.6669 17.4275 10.6669 16.0129C10.6669 14.5984 11.2289 13.2418 12.2291 12.2416C13.2293 11.2414 14.5859 10.6795 16.0004 10.6795C17.4149 10.6795 18.7715 11.2414 19.7717 12.2416C20.772 13.2418 21.3339 14.5984 21.3339 16.0129C21.3339 17.4275 20.772 18.784 19.7717 19.7843C18.7715 20.7845 17.4149 21.3464 16.0004 21.3464ZM26.454 7.47939C26.454 6.97016 26.2517 6.48179 25.8916 6.12171C25.5315 5.76163 25.0432 5.55934 24.5339 5.55934C24.0247 5.55934 23.5363 5.76163 23.1763 6.12171C22.8162 6.48179 22.6139 6.97016 22.6139 7.47939C22.6139 7.98861 22.8162 8.47699 23.1763 8.83706C23.5363 9.19714 24.0247 9.39943 24.5339 9.39943C25.0432 9.39943 25.5315 9.19714 25.8916 8.83706C26.2517 8.47699 26.454 7.98861 26.454 7.47939Z" fill="none"/>
          </svg>
        </a>
      </div>

      <div className="footer_navbar">
        <NavLink to="/about">
          About us
        </NavLink>
        <NavLink to="/contact">
          Contact
        </NavLink>
        <NavLink to="/help">
          Help
        </NavLink>
        <NavLink to="/cookies">
          Cookies
        </NavLink>
      </div>

    </footer>
  )
}