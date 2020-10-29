using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace MSMBackend.Migrations
{
    public partial class SecondSeedTest : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Properties",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "EditTime", "ImageURL", "Location", "Name", "Username" },
                values: new object[] { new DateTimeOffset(new DateTime(2020, 10, 29, 12, 52, 12, 301, DateTimeKind.Unspecified).AddTicks(6022), new TimeSpan(0, -5, 0, 0, 0)), "TestImage2", "TestLocatio2n", "TestProp2", "TestUsername2" });

            migrationBuilder.InsertData(
                table: "Properties",
                columns: new[] { "Id", "Chimney", "Door", "EditTime", "Electrical", "ExtOpenings", "ExtWalls", "Flooring", "Framework", "HVAC", "ImageURL", "Location", "Name", "Piers", "Plumbing", "Roof", "Sewer", "Shutters", "Username", "Utilities", "Windows" },
                values: new object[,]
                {
                    { 4, 7, 7, new DateTimeOffset(new DateTime(2020, 10, 29, 12, 52, 12, 303, DateTimeKind.Unspecified).AddTicks(3545), new TimeSpan(0, -5, 0, 0, 0)), 7, 7, 7, 7, 7, 7, "TestImage4", "TestLocation4", "TestProp4", 7, 7, 7, 7, 7, "TestUsername4", false, 7 },
                    { 5, 7, 7, new DateTimeOffset(new DateTime(2020, 10, 29, 12, 52, 12, 303, DateTimeKind.Unspecified).AddTicks(3602), new TimeSpan(0, -5, 0, 0, 0)), 7, 7, 7, 7, 7, 7, "TestImage5", "TestLocation5", "TestProp5", 7, 7, 7, 7, 7, "TestUsername5", false, 7 },
                    { 6, 7, 7, new DateTimeOffset(new DateTime(2020, 10, 29, 12, 52, 12, 303, DateTimeKind.Unspecified).AddTicks(3611), new TimeSpan(0, -5, 0, 0, 0)), 7, 7, 7, 7, 7, 7, "TestImage6", "TestLocation6", "TestProp6", 7, 7, 7, 7, 7, "TestUsername6", false, 7 },
                    { 7, 7, 7, new DateTimeOffset(new DateTime(2020, 10, 29, 12, 52, 12, 303, DateTimeKind.Unspecified).AddTicks(3618), new TimeSpan(0, -5, 0, 0, 0)), 7, 7, 7, 7, 7, 7, "TestImage7", "TestLocation7", "TestProp7", 7, 7, 7, 7, 7, "TestUsername7", false, 7 }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Properties",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Properties",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Properties",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Properties",
                keyColumn: "Id",
                keyValue: 7);

            migrationBuilder.UpdateData(
                table: "Properties",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "EditTime", "ImageURL", "Location", "Name", "Username" },
                values: new object[] { new DateTimeOffset(new DateTime(2020, 10, 29, 12, 40, 16, 731, DateTimeKind.Unspecified).AddTicks(6087), new TimeSpan(0, -5, 0, 0, 0)), "TestImage", "TestLocation", "TestProp", "TestUsername" });
        }
    }
}
