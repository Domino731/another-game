import styles from "./CharacterPerks.module.scss";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { ConnectionsLayer } from "./ConnectionsLayer/ConnectionsLayer.tsx";
import { PerksLayer } from "./PerksLayer/PerksLayer.tsx";
import { AttributesNav } from "../AttributesNav/AttributesNav";
import { ActionBar } from "../CharacterAttributes/ActionBar/ActionBar";
import { Routes, Route, useLocation } from "react-router-dom";
import { AttributeModel, AttributeName } from "../../../../Models/attributes";
import {
  BODY_ATTRIBUTE,
  COOL_ATTRIBUTE,
  INTELLIGENCE_ATTRIBUTE,
  REFLEX_ATTRIBUTE,
  TECHNICAL_ABILITY_ATTRIBUTE,
} from "../../../../config/attributes";
import { useMemo } from "react";

const PerksComponent = ({ data }: { data: AttributeModel }) => {
  return (
    <TransformWrapper defaultPositionX={200} defaultPositionY={400}>
      <TransformComponent>
        <div className={styles.perksContainer}>
          <ConnectionsLayer
            containerClassName={data.connectionsClassName}
            connectionsData={data.perksConnections}
          />
          <PerksLayer perksData={data.perksData} />
        </div>
      </TransformComponent>
    </TransformWrapper>
  );
};

export const CharacterPerksPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const attributeKey = queryParams.get("attribute");

  const perksData = useMemo(() => {
    switch (attributeKey) {
      case AttributeName.BODY:
        return BODY_ATTRIBUTE;
      case AttributeName.COOL:
        return COOL_ATTRIBUTE;
      case AttributeName.INTELLIGENCE:
        return INTELLIGENCE_ATTRIBUTE;
      case AttributeName.REFLEX:
        return REFLEX_ATTRIBUTE;
      case AttributeName.TECHNICAL_ABILITY:
        return TECHNICAL_ABILITY_ATTRIBUTE;
      default:
        return null;
    }
  }, [attributeKey]);

  return (
    <div className={styles.container}>
      {attributeKey && (
        <AttributesNav attributeId={attributeKey as AttributeName} />
      )}
      {perksData && <PerksComponent data={perksData} />}
      <ActionBar />
    </div>
  );
};
