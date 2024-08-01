import { FooterProps, FooterTypeEnum } from "models";

export const Footer = ({ type = FooterTypeEnum.default }: FooterProps) => {
  let body = <></>;

  if (type === FooterTypeEnum.app) {
    body = (
      <footer className="w-full border-t border-border bg-secondary">
        <div className="appScreenWidth py-2">
          <h4>Develop by AguzzDev</h4>
        </div>
      </footer>
    );
  } else {
    body = (
      <footer className="w-full border-t border-border bg-secondary">
        <div className="screenWidth py-2">
          <h4>Develop by AguzzDev</h4>
        </div>
      </footer>
    );
  }

  return body;
};
