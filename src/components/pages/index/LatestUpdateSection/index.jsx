import * as React from "react";
import ImageStrip from "src/components/ImageStrip";
import Section from "src/components/Section";
import styled from "styled-components";
import schemaEnforcement from "./schemaEnforcement.png";
import thumbnailDeltaSharingCDF from "./delta-sharing-cdf.png";
import versionPandasDataset from "./versionPandasDataset.png";
import howToCreateDeltaLakeTable from "./create-delta-lake-table.png";
import pysparkSaveModes from "./pysparkSaveModes.png";

const updates = [
  {
    title: "Delta Lake Schema Enforcement",
    thumbnail: schemaEnforcement,
    url: "/blog/2022-11-16-delta-lake-schema-enforcement/",
  },
  {
    title:
      "Why PySpark append and overwrite write operations are safer in Delta Lake than Parquet tables",
    thumbnail: pysparkSaveModes,
    url: "/blog/2022-11-01-pyspark-save-mode-append-overwrite-error/",
  },
  {
    title: "How to Create Delta Lake tables",
    thumbnail: howToCreateDeltaLakeTable,
    url: "/blog/2022-10-25-create-delta-lake-tables/",
  },
  {
    title: "How to Version Your Data with pandas and Delta Lake",
    thumbnail: versionPandasDataset,
    url: "/blog/2022-10-15-version-pandas-dataset/",
  },
  {
    title: "Sharing a Delta Table’s Change Data Feed with Delta Sharing 0.5.0",
    thumbnail: thumbnailDeltaSharingCDF,
    url: "/blog/2022-10-10-delta-sharing-0-5-0-released/",
  },
];

const CenteredImageStrip = styled(ImageStrip)`
  text-align: center;
`;

const LatestUpdateSection = () => (
  <Section
    background={(theme) => theme.light.bg}
    title="The Latest"
    titleSize="h5"
    centeredHeader
    padding="xxxl"
  >
    <CenteredImageStrip items={updates} />
  </Section>
);

export default LatestUpdateSection;
