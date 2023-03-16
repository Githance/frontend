import { FC } from "react";

type Props = { size: "small" | "medium" | "large" };

const AnchorIcon: FC<Props> = ({ size }) => {
  switch (size) {
    case "small":
      return (
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1007_1391)">
            <path
              d="M7.3226 4.67729C7.18044 4.5343 7.02284 4.40754 6.85269 4.29936C6.40202 4.01078 5.87809 3.85742 5.34295 3.85743C4.97521 3.85674 4.61097 3.92883 4.27121 4.06954C3.93145 4.21025 3.62289 4.4168 3.36331 4.67729L0.819766 7.22282C0.296357 7.74723 0.0021833 8.45775 0.00170956 9.19867C0.000725366 10.7448 1.25328 11.999 2.79941 12C3.16659 12.0012 3.53038 11.9298 3.86981 11.7898C4.20924 11.6497 4.51758 11.4439 4.77706 11.1841L6.87669 9.08448C6.90488 9.05651 6.9241 9.02077 6.93191 8.98183C6.93972 8.94289 6.93576 8.90251 6.92053 8.86583C6.9053 8.82915 6.87949 8.79784 6.84639 8.77588C6.8133 8.75392 6.77442 8.74232 6.7347 8.74254H6.65472C6.21606 8.74408 5.78132 8.65985 5.37496 8.49459C5.33836 8.47953 5.29811 8.47567 5.25931 8.4835C5.22051 8.49133 5.18491 8.5105 5.15701 8.53858L3.64727 10.0503C3.17847 10.5191 2.41838 10.5191 1.94958 10.0503C1.48077 9.5815 1.48077 8.82142 1.94958 8.35261L4.50313 5.80108C4.97156 5.33323 5.7304 5.33323 6.19883 5.80108C6.51452 6.09819 7.00695 6.09819 7.32262 5.80108C7.45845 5.66513 7.54079 5.48483 7.55459 5.29316C7.56181 5.17992 7.54486 5.06645 7.50486 4.96026C7.46486 4.85408 7.40273 4.75762 7.3226 4.67729Z"
              fill="#171717"
            />
            <path
              d="M11.1796 0.819995C10.0863 -0.273332 8.31366 -0.273332 7.22034 0.819995L5.1227 2.91561C5.09455 2.9439 5.07551 2.97996 5.06803 3.01917C5.06054 3.05837 5.06496 3.09891 5.08071 3.13558C5.09628 3.17236 5.1225 3.20363 5.156 3.22537C5.1895 3.24711 5.22874 3.25832 5.26867 3.25755H5.34265C5.7808 3.25674 6.21487 3.34166 6.62042 3.50751C6.65702 3.52258 6.69727 3.52644 6.73607 3.51861C6.77487 3.51078 6.81048 3.49161 6.83837 3.46353L8.3441 1.95979C8.81291 1.49098 9.57299 1.49098 10.0418 1.95979C10.5106 2.4286 10.5106 3.18868 10.0418 3.65749L8.16613 5.53114L8.15012 5.54914L7.49425 6.20103C7.02582 6.66887 6.26697 6.66887 5.79854 6.20103C5.48285 5.90392 4.99042 5.90392 4.67475 6.20103C4.53807 6.33799 4.45566 6.51986 4.44279 6.71293C4.43556 6.82617 4.4525 6.93965 4.4925 7.04584C4.53249 7.15203 4.59462 7.24849 4.67475 7.32883C4.90619 7.56125 5.177 7.75081 5.4746 7.88872C5.51659 7.90871 5.55859 7.92471 5.60058 7.94271C5.64257 7.9607 5.68656 7.97469 5.72855 7.9907C5.77059 8.0065 5.81329 8.02051 5.85652 8.03269L5.9745 8.06468C6.05448 8.08467 6.13448 8.10067 6.21645 8.11466C6.3152 8.12933 6.41465 8.13868 6.51441 8.14266H6.66637L6.78635 8.12867C6.83033 8.12668 6.87633 8.11668 6.92833 8.11668H6.99631L7.13429 8.09669L7.19828 8.08469L7.31426 8.06069H7.33626C7.82745 7.93732 8.27596 7.68299 8.63402 7.32482L11.1796 4.77928C12.273 3.68596 12.273 1.91332 11.1796 0.819995Z"
              fill="#171717"
            />
          </g>
          <defs>
            <clipPath id="clip0_1007_1391">
              <rect width="12" height="12" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    case "medium":
      return (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1007_1387)">
            <path
              d="M9.76118 6.23646C9.57164 6.04581 9.36151 5.8768 9.13464 5.73256C8.53375 5.34779 7.83518 5.14331 7.12166 5.14332C6.63133 5.1424 6.14568 5.23852 5.69266 5.42614C5.23965 5.61375 4.82824 5.88915 4.48213 6.23646L1.09074 9.63051C0.392864 10.3297 0.000632416 11.2771 7.72806e-07 12.265C-0.00131149 14.3265 1.66876 15.9987 3.73027 16C4.21984 16.0017 4.70489 15.9065 5.15747 15.7198C5.61004 15.5331 6.02117 15.2586 6.36714 14.9122L9.16664 12.1127C9.20423 12.0754 9.22986 12.0278 9.24027 11.9759C9.25068 11.9239 9.2454 11.8701 9.22509 11.8212C9.20478 11.7723 9.17037 11.7305 9.12625 11.7013C9.08212 11.672 9.03028 11.6565 8.97733 11.6568H8.87069C8.2858 11.6589 7.70614 11.5466 7.16434 11.3262C7.11553 11.3061 7.06187 11.301 7.01013 11.3114C6.9584 11.3219 6.91093 11.3474 6.87373 11.3849L4.86075 13.4005C4.23568 14.0256 3.22223 14.0256 2.59716 13.4005C1.97208 12.7754 1.97208 11.762 2.59716 11.1369L6.00189 7.73485C6.62647 7.11106 7.63825 7.11106 8.26283 7.73485C8.68375 8.131 9.34032 8.131 9.76122 7.73485C9.94232 7.55359 10.0521 7.31319 10.0705 7.05763C10.0801 6.90665 10.0575 6.75534 10.0042 6.61376C9.95087 6.47219 9.86803 6.34357 9.76118 6.23646Z"
              fill="#171717"
            />
            <path
              d="M14.9045 1.09333C13.4468 -0.364442 11.0833 -0.364442 9.62549 1.09333L6.82864 3.88748C6.79111 3.9252 6.76572 3.97329 6.75574 4.02555C6.74576 4.07782 6.75165 4.13188 6.77265 4.18077C6.79341 4.22981 6.82837 4.27151 6.87304 4.30049C6.9177 4.32948 6.97003 4.34442 7.02327 4.3434H7.1219C7.7061 4.34233 8.28487 4.45555 8.8256 4.67668C8.8744 4.69677 8.92807 4.70192 8.9798 4.69148C9.03154 4.68104 9.07901 4.65548 9.1162 4.61804L11.1238 2.61305C11.7489 1.98798 12.7624 1.98798 13.3874 2.61305C14.0125 3.23813 14.0125 4.25157 13.3874 4.87665L10.8865 7.37485L10.8652 7.39885L9.9907 8.26804C9.36613 8.89183 8.35434 8.89183 7.72976 8.26804C7.30884 7.87189 6.65227 7.87189 6.23138 8.26804C6.04913 8.45066 5.93925 8.69314 5.92209 8.95057C5.91245 9.10156 5.93504 9.25287 5.98837 9.39445C6.04169 9.53603 6.12453 9.66465 6.23138 9.77177C6.53996 10.0817 6.90104 10.3344 7.29784 10.5183C7.35383 10.5449 7.40982 10.5663 7.46581 10.5903C7.5218 10.6143 7.58045 10.6329 7.63644 10.6543C7.69249 10.6753 7.74942 10.694 7.80706 10.7103L7.96438 10.7529C8.07102 10.7796 8.17768 10.8009 8.28698 10.8195C8.41864 10.8391 8.55124 10.8516 8.68425 10.8569H8.88687L9.04684 10.8382C9.10548 10.8356 9.16682 10.8222 9.23615 10.8222H9.32679L9.51076 10.7956L9.59608 10.7796L9.75071 10.7476H9.78005C10.435 10.5831 11.033 10.244 11.5104 9.76642L14.9044 6.37238C16.3623 4.91461 16.3623 2.5511 14.9045 1.09333Z"
              fill="#171717"
            />
          </g>
          <defs>
            <clipPath id="clip0_1007_1387">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    case "large":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1007_1383)">
            <path
              d="M14.6435 9.35457C14.3592 9.06859 14.044 8.81508 13.7037 8.59871C12.8023 8.02157 11.7545 7.71484 10.6842 7.71485C9.94871 7.71348 9.22022 7.85766 8.5407 8.13908C7.86118 8.4205 7.24407 8.8336 6.72491 9.35457L1.63782 14.4456C0.591005 15.4945 0.00265761 16.9155 0.00171014 18.3973C-0.000258253 21.4896 2.50485 23.9979 5.59711 23.9999C6.33146 24.0025 7.05905 23.8596 7.73791 23.5795C8.41677 23.2995 9.03346 22.8878 9.55242 22.3682L13.7517 18.169C13.808 18.113 13.8465 18.0415 13.8621 17.9637C13.8777 17.8858 13.8698 17.805 13.8393 17.7317C13.8089 17.6583 13.7573 17.5957 13.6911 17.5518C13.6249 17.5078 13.5471 17.4846 13.4677 17.4851H13.3077C12.4304 17.4882 11.5609 17.3197 10.7482 16.9892C10.675 16.9591 10.5945 16.9513 10.5169 16.967C10.4393 16.9827 10.3681 17.021 10.3123 17.0772L7.29284 20.1006C6.35522 21.0382 4.83506 21.0382 3.89745 20.1006C2.95983 19.163 2.95983 17.6428 3.89745 16.7052L9.00455 11.6022C9.94141 10.6665 11.4591 10.6665 12.396 11.6022C13.0273 12.1964 14.0122 12.1964 14.6435 11.6022C14.9152 11.3303 15.0799 10.9697 15.1075 10.5863C15.1219 10.3598 15.088 10.1329 15.008 9.92052C14.928 9.70816 14.8038 9.51524 14.6435 9.35457Z"
              fill="#171717"
            />
            <path
              d="M22.3575 1.63999C20.1709 -0.546663 16.6256 -0.546663 14.439 1.63999L10.2437 5.83122C10.1874 5.8878 10.1493 5.95993 10.1343 6.03833C10.1194 6.11673 10.1282 6.19782 10.1597 6.27116C10.1908 6.34471 10.2433 6.40726 10.3103 6.45074C10.3773 6.49422 10.4558 6.51663 10.5356 6.5151H10.6836C11.5599 6.51349 12.428 6.68332 13.2391 7.01502C13.3123 7.04515 13.3928 7.05288 13.4704 7.03722C13.548 7.02156 13.6192 6.98322 13.675 6.92706L16.6865 3.91958C17.6241 2.98197 19.1443 2.98197 20.0819 3.91958C21.0195 4.85719 21.0195 6.37736 20.0819 7.31497L16.3305 11.0623L16.2985 11.0983L14.9868 12.4021C14.0499 13.3377 12.5322 13.3377 11.5954 12.4021C10.964 11.8078 9.97914 11.8078 9.3478 12.4021C9.07442 12.676 8.9096 13.0397 8.88387 13.4259C8.86941 13.6523 8.9033 13.8793 8.98329 14.0917C9.06327 14.3041 9.18753 14.497 9.3478 14.6577C9.81068 15.1225 10.3523 15.5016 10.9475 15.7774C11.0315 15.8174 11.1155 15.8494 11.1994 15.8854C11.2834 15.9214 11.3714 15.9494 11.4554 15.9814C11.5395 16.013 11.6249 16.041 11.7113 16.0654L11.9473 16.1294C12.1073 16.1693 12.2673 16.2013 12.4312 16.2293C12.6287 16.2587 12.8276 16.2774 13.0271 16.2853H13.331L13.571 16.2573C13.659 16.2534 13.751 16.2334 13.855 16.2334H13.9909L14.2669 16.1934L14.3949 16.1694L14.6268 16.1214H14.6708C15.6532 15.8746 16.5502 15.366 17.2663 14.6496L22.3574 9.55857C24.5442 7.37191 24.5442 3.82664 22.3575 1.63999Z"
              fill="#171717"
            />
          </g>
          <defs>
            <clipPath id="clip0_1007_1383">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
  }
};

export default AnchorIcon;