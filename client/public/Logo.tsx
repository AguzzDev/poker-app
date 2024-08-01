import * as React from "react";
import { SVGProps } from "react";

const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={214}
    height={56}
    fill="none"
    {...props}
  >
    <path
      fill="#CC8DEF"
      fillRule="evenodd"
      d="M.279 26.695 16.85 42.972l17.13-16.277L17.408 10.42.278 26.695Z"
      clipRule="evenodd"
    />
    <path
      fill="#CC8DEF"
      d="M56.973 29.776v-3.904h4.864c.619 0 1.184-.128 1.696-.384s.917-.63 1.216-1.12c.299-.49.448-1.088.448-1.792 0-.683-.15-1.27-.448-1.76a2.931 2.931 0 0 0-1.216-1.12 3.739 3.739 0 0 0-1.696-.384h-4.864v-3.904h5.6c1.43 0 2.72.288 3.872.864a6.54 6.54 0 0 1 2.72 2.496c.683 1.067 1.024 2.336 1.024 3.808s-.341 2.752-1.024 3.84c-.661 1.067-1.568 1.899-2.72 2.496-1.152.576-2.443.864-3.872.864h-5.6ZM53.133 38V15.408h5.024V38h-5.024Zm24.109.352c-1.6 0-3.051-.352-4.352-1.056a8.218 8.218 0 0 1-3.04-2.944c-.747-1.237-1.12-2.624-1.12-4.16s.373-2.912 1.12-4.128a8.054 8.054 0 0 1 3.04-2.88c1.28-.725 2.73-1.088 4.352-1.088 1.621 0 3.072.352 4.352 1.056a7.975 7.975 0 0 1 3.04 2.912c.746 1.216 1.12 2.592 1.12 4.128s-.374 2.923-1.12 4.16a8.218 8.218 0 0 1-3.04 2.944c-1.28.704-2.731 1.056-4.352 1.056Zm0-4.448c.704 0 1.322-.15 1.856-.448.533-.32.938-.757 1.216-1.312.298-.576.448-1.227.448-1.952 0-.725-.15-1.355-.448-1.888a3.138 3.138 0 0 0-1.248-1.28c-.512-.32-1.12-.48-1.824-.48-.683 0-1.291.16-1.824.48-.534.299-.95.725-1.248 1.28-.299.555-.448 1.195-.448 1.92 0 .704.149 1.344.448 1.92.298.555.714.992 1.248 1.312.533.299 1.141.448 1.824.448ZM95.743 38l-5.44-8.064 5.408-7.488h5.472l-6.528 8.416.16-2.016L101.503 38h-5.76Zm-9.952 0V14.768h4.896V38h-4.896Zm22.061.352c-1.685 0-3.189-.341-4.512-1.024a7.918 7.918 0 0 1-3.072-2.912c-.746-1.237-1.12-2.635-1.12-4.192 0-1.557.363-2.944 1.088-4.16a8.049 8.049 0 0 1 3.008-2.912c1.259-.704 2.678-1.056 4.256-1.056 1.536 0 2.891.33 4.064.992a7.102 7.102 0 0 1 2.752 2.752c.683 1.173 1.024 2.517 1.024 4.032 0 .277-.021.576-.064.896a7.83 7.83 0 0 1-.16 1.056l-13.408.032v-3.36l11.328-.032-2.112 1.408c-.021-.896-.16-1.632-.416-2.208-.256-.597-.64-1.045-1.152-1.344-.49-.32-1.098-.48-1.824-.48-.768 0-1.44.181-2.016.544-.554.341-.992.832-1.312 1.472-.298.64-.448 1.419-.448 2.336 0 .917.16 1.707.48 2.368.342.64.811 1.141 1.408 1.504.619.341 1.344.512 2.176.512.768 0 1.462-.128 2.08-.384a4.736 4.736 0 0 0 1.632-1.216l2.688 2.688a7.257 7.257 0 0 1-2.784 2.016c-1.088.448-2.282.672-3.584.672Zm7.452-.352V22.448h4.896V38h-4.896Zm4.896-8.544-2.048-1.6c.405-1.813 1.088-3.221 2.048-4.224.96-1.003 2.293-1.504 4-1.504.746 0 1.397.117 1.952.352a3.79 3.79 0 0 1 1.504 1.024l-2.912 3.68a2.137 2.137 0 0 0-.8-.544 2.91 2.91 0 0 0-1.088-.192c-.811 0-1.462.256-1.952.768-.47.49-.704 1.237-.704 2.24Zm21.848 8.928c-1.706 0-3.285-.299-4.736-.896a11.891 11.891 0 0 1-3.776-2.496 11.371 11.371 0 0 1-2.528-3.712c-.597-1.43-.896-2.965-.896-4.608 0-1.664.299-3.2.896-4.608a11.264 11.264 0 0 1 2.496-3.68 11.111 11.111 0 0 1 3.744-2.464c1.451-.597 3.03-.896 4.736-.896 1.686 0 3.243.299 4.672.896a11.022 11.022 0 0 1 3.776 2.464 10.926 10.926 0 0 1 2.528 3.712c.598 1.408.896 2.944.896 4.608 0 1.643-.298 3.179-.896 4.608a11.599 11.599 0 0 1-2.496 3.712c-1.066 1.045-2.325 1.867-3.776 2.464-1.429.597-2.976.896-4.64.896Zm-.064-4.576c1.344 0 2.518-.299 3.52-.896a6.067 6.067 0 0 0 2.368-2.496c.555-1.088.832-2.336.832-3.744 0-1.067-.16-2.027-.48-2.88-.32-.875-.778-1.621-1.376-2.24a5.68 5.68 0 0 0-2.144-1.44c-.81-.341-1.717-.512-2.72-.512-1.344 0-2.528.299-3.552.896-1.002.576-1.781 1.397-2.336 2.464-.554 1.045-.832 2.283-.832 3.712 0 1.067.16 2.037.48 2.912.32.875.768 1.632 1.344 2.272a6.23 6.23 0 0 0 2.144 1.44c.832.341 1.75.512 2.752.512ZM164.469 38v-8.864c0-.81-.256-1.461-.768-1.952-.49-.512-1.12-.768-1.888-.768-.533 0-1.002.117-1.408.352a2.316 2.316 0 0 0-.96.96c-.234.405-.352.875-.352 1.408l-1.888-.928c0-1.216.267-2.283.8-3.2a5.407 5.407 0 0 1 2.208-2.112c.96-.512 2.038-.768 3.232-.768 1.152 0 2.166.277 3.04.832a5.816 5.816 0 0 1 2.112 2.144 5.83 5.83 0 0 1 .768 2.944V38h-4.896Zm-10.272 0V22.448h4.896V38h-4.896Zm15.913 0V14.768h4.896V38h-4.896Zm5.944 0V22.448h4.896V38h-4.896Zm2.464-17.696c-.768 0-1.408-.256-1.92-.768-.491-.533-.736-1.173-.736-1.92 0-.768.245-1.408.736-1.92.512-.512 1.152-.768 1.92-.768s1.397.256 1.888.768c.49.512.736 1.152.736 1.92 0 .747-.246 1.387-.736 1.92-.491.512-1.12.768-1.888.768ZM192.269 38v-8.864c0-.81-.256-1.461-.768-1.952-.49-.512-1.12-.768-1.888-.768-.533 0-1.002.117-1.408.352a2.316 2.316 0 0 0-.96.96c-.234.405-.352.875-.352 1.408l-1.888-.928c0-1.216.267-2.283.8-3.2a5.407 5.407 0 0 1 2.208-2.112c.96-.512 2.038-.768 3.232-.768 1.152 0 2.166.277 3.04.832a5.816 5.816 0 0 1 2.112 2.144 5.83 5.83 0 0 1 .768 2.944V38h-4.896Zm-10.272 0V22.448h4.896V38h-4.896Zm23.593.352c-1.685 0-3.189-.341-4.512-1.024a7.918 7.918 0 0 1-3.072-2.912c-.747-1.237-1.12-2.635-1.12-4.192 0-1.557.363-2.944 1.088-4.16a8.042 8.042 0 0 1 3.008-2.912c1.259-.704 2.677-1.056 4.256-1.056 1.536 0 2.891.33 4.064.992a7.109 7.109 0 0 1 2.752 2.752c.683 1.173 1.024 2.517 1.024 4.032 0 .277-.021.576-.064.896-.021.299-.075.65-.16 1.056l-13.408.032v-3.36l11.328-.032-2.112 1.408c-.021-.896-.16-1.632-.416-2.208-.256-.597-.64-1.045-1.152-1.344-.491-.32-1.099-.48-1.824-.48-.768 0-1.44.181-2.016.544-.555.341-.992.832-1.312 1.472-.299.64-.448 1.419-.448 2.336 0 .917.16 1.707.48 2.368a3.83 3.83 0 0 0 1.408 1.504c.619.341 1.344.512 2.176.512.768 0 1.461-.128 2.08-.384a4.736 4.736 0 0 0 1.632-1.216l2.688 2.688a7.257 7.257 0 0 1-2.784 2.016c-1.088.448-2.283.672-3.584.672Z"
    />
  </svg>
);
export default Logo;
